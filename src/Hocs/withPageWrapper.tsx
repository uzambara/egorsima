import React from 'react';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import styles from './withpageWrapper.scss';
import { ClassNameProps } from '../Types';

export function withPageWrapper<Props extends {}>(Component: React.FC<Props & ClassNameProps>) {
  return function (props: Props) {
    return (
      <div className={styles.container}>
        <Header />
        <Component {...props} className={styles.main} />
        <Footer />
      </div>
    );
  };
}
