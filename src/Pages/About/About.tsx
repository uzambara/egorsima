import React from 'react';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';

import dimerdgi from './images/dimerdgi.jpg';
import ktm from './images/ktm.jpg';
import moto from './images/moto.jpg';
import elbrus from './images/elbrus.jpeg';
import me from './images/me.jpeg';
import { Image } from '../../Components/Image/Image';

import styles from './About.scss';
import sharedStyles from '../Pages.scss';
import { AboutItem } from './AboutItem/AboutItem';

type Props = ClassNameProps;

const ABOUT_ITEMS = [
  {
    title: 'Work',
    description: (
      <p>
        I am software engineer. I am working on this position for the last 5 years. During this time I managed to
        participate in the development of several commercial applications. Some of them were highly loaded and had
        millions of registered users. I also have experience as a team lead. I developed ERP system for marketplaces
        from the beginning.
      </p>
    ),
  },
  {
    title: 'Professional Interests',
    description: (
      <p>
        I like challenging tasks. Optimization of database queries. Third party API integration (Ebay, Amazon, Google
        maps). I pay attention to the study of fundamental things in computer since, like design patterns, algorithms
        and data structures. I really love my job and I trying to follow of new trends in IT.
      </p>
    ),
  },
  {
    title: 'Soft skills',
    description: (
      <p>
        I'm a team player. I will never refuse help. I love to share my knowledge and gain knowledge from colleagues. I
        am a sociable and cheerful person.
      </p>
    ),
  },
  {
    title: 'Life',
    description: (
      <p>
        Besides work I am raising two children. I like snowboarding and motorcycles. I traveled a lot on a motorcycle in
        Russia. I was on Elbrus and Sochi mountains. I also love rock music and rock festivals.
      </p>
    ),
  },
];

function AboutPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>about me</h2>
      <section className={styles.aboutMe}>
        <div className={styles.aboutText}>
          <h3>Hi, I'm Egor.</h3>
          {ABOUT_ITEMS.map((props, i) => (
            <AboutItem key={i} {...props} />
          ))}
        </div>
        <img className={styles.myPhoto} alt={'egor simonov'} src={me} width={220} height={'auto'} />
      </section>
      <ul className={styles.photos}>
        <li className={styles.photo}>
          <Image width={260} height={170} src={dimerdgi} alt={'dimerdgi'} description={'Demerdji, Crimea'} />
        </li>
        <li className={styles.photo}>
          <Image width={260} height={170} src={ktm} alt={'ktm'} description={'Evpatoria, Red lake, Crimea'} />
        </li>
        <li className={styles.photo}>
          <Image width={260} height={170} src={elbrus} alt={'elbrus'} description={'Elbrus, Russia'} />
        </li>
        <li className={styles.photo}>
          <Image width={260} height={170} src={moto} alt={'moto'} description={'Izhevsk, Russia'} />
        </li>
      </ul>
    </main>
  );
}

export const AboutPage = withPageWrapper(AboutPageComponent);
