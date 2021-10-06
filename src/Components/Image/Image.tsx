import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import styles from './Image.scss';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  description: string;
};

export function Image({ src, alt, width, height, description }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const close = () => setIsOpened(false);
  const open = () => setIsOpened(true);
  return (
    <>
      <Modal isOpen={isOpened} onClose={close}>
        <img height={600} src={src} alt={alt} />
        <p className={styles.description}>{description}</p>
      </Modal>
      <img height={height} width={width} src={src} alt={alt} onClick={open} className={styles.img} />
    </>
  );
}
