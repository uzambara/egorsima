import React, { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import { ClassNameProps } from '../../Types';
import cn from 'classnames';
import styles from './Modal.scss';
import { Icons } from '../../Assets';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
} & ClassNameProps;

export function Modal({
  isOpen,
  onClose,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <ReactModal
      isOpen={isOpen}
      preventScroll={true}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onRequestClose={onClose}
      className={cn(styles.modal, className)}
    >
      <img onClick={onClose} width={15} height={15} className={styles.closeIcon} src={Icons.close} alt={'close'} />
      {children}
    </ReactModal>
  );
}
