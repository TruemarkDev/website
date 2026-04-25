import toast from "react-hot-toast"

import { eventEmitter } from "utils/eventEmitter"

class ToastService {
  static async processPromise(promise, options = {}) {
    const {
      loadingMessage = 'Please wait ..... <br /> Your message is being processed.',
      successMessage = 'Thank you! Your message has been successfully sent.',
      errorMessage = 'There seems to be some error. Please try again!',
      reloadPage = true,
    } = options;

    eventEmitter.emit('showProcessingModal', loadingMessage);

    try {
      const result = await promise;
      eventEmitter.emit('hideProcessingModal');
      this.showSuccessToast(successMessage);
      return result;
    } catch (error) {
      eventEmitter.emit('hideProcessingModal');
      this.showErrorToast(errorMessage);
    } finally {
      if (reloadPage) {
        setTimeout(() => {
          window.location.reload();      
        }, 2000);
      }
    }
  }

  static showSuccessToast(message) {
    toast.success(message, {
        style: {
            backgroundColor: '#e8f5ea'
        }
    });
  }

  static showErrorToast(message) {
    toast.error(message, {
        style: {
            backgroundColor: '#fee7e7'
        }
    });
  }
}

export default ToastService;