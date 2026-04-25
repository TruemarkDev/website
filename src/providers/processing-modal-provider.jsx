import React, { createContext, useState, useContext, useEffect } from 'react';

import ProcessingModal from 'components/Modal/ProcessingModal';

import { eventEmitter } from 'utils/eventEmitter'

const ProcessingModalContext = createContext(undefined);

export const useProcessingModal = () => {
  const context = useContext(ProcessingModalContext);
  if (!context) {
    throw new Error(
      'useProcessingModal must be used within a ProcessingModalProvider'
    );
  }
  return context;
};

export const ProcessingModalProvider = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const showHandler = (message) => {
      setMessage(message);
      setIsProcessing(true);
    };

    const hideHandler = () => {
      setIsProcessing(false);
      setMessage('');
    };

    eventEmitter.on('showProcessingModal', showHandler);
    eventEmitter.on('hideProcessingModal', hideHandler);

    return () => {
      eventEmitter.off('showProcessingModal', showHandler);
      eventEmitter.off('hideProcessingModal', hideHandler);
    };
  }, []);

  const value = {
    showModal: (message) => {
      eventEmitter.emit('showProcessingModal', message);
    },
    hideModal: () => {
      eventEmitter.emit('hideProcessingModal');
    },
    isProcessing,
    message,
  };

  return (
    <ProcessingModalContext.Provider value={value}>
      {children}
      {isProcessing && (
        <ProcessingModal
          isProcessing={isProcessing}
          hideModal={value.hideModal}
          message={message}
        />
      )}
    </ProcessingModalContext.Provider>
  );
};
