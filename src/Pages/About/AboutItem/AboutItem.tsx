import React from 'react';
import styles from './AboutItem.scss';

type Props = {
  title: string;
  description: React.ReactElement;
};

export function AboutItem({ title, description }: Props) {
  return (
    <>
      <h4>{title}</h4>
      <div className={styles.description}>{description}</div>
    </>
  );
}
