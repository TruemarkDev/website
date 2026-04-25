import type { ComponentType, ReactNode } from 'react';

export interface ButtonWithModalProps {
  text?: string;
  className?: string;
  modalType?: string;
  attributes?: Record<string, unknown>;
  title?: string;
  subTitle?: string;
  estimateModalType?: string;
  children?: ReactNode;
}

declare const ButtonWithModal: ComponentType<ButtonWithModalProps>;

export default ButtonWithModal;
