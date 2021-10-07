import React from 'react';
import styles from './CvPage.scss';
import { PlaceOfWork } from './modules/PlaceOfWork/PlaceOfWork';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';
import { InfoRow } from './modules/InfoRow/InfoRow';
import sharedStyles from '../Pages.scss';

type Props = ClassNameProps;

const PLACES_OF_WORK = [
  {
    period: 'October 2020 - current',
    position: 'Teamlead at <a target="_blank" href="https://ship-cheaper.com">Ship-Cheaper</a>',
    location: 'Bruchsal, Germany',
    technologies: 'React, Typescript, Angular, ASP.NET CORE, Node.JS',
    responsibilities: [
      'Development of ERP system for marketplaces (Ebay, Amazon)',
      'Application architecture development',
      'Tasks estimation',
      'Interviewing',
      'Onboarding new developers',
      'Code review',
    ],
  },
  {
    period: 'January 2021 - current',
    position: 'Senior Software Developer at <a target="_blank" href="https://softwarecountry.ru/">Arcadia</a>',
    location: 'St. Petersburg, Russia',
    technologies: 'React, Typescript, Angular, ASP.NET CORE, Node.JS',
    responsibilities: [
      'Software development within the various projects',
      'Tasks estimation',
      'Participation on project meetings',
      'Code review',
    ],
  },
  {
    period: 'July 2020 – January 2021',
    position: 'Senior Frontend Developer at <a target="_blank" href="https://www.luxoft.com/">Luxoft</a>',
    location: 'St. Petersburg, Russia',
    technologies: 'React, Redux, Java',
    responsibilities: [
      'Development of the customer interface for courier delivery of "Russian Post"',
      'Tasks estimation',
      'Interviewing',
      'Participation on project meetings',
      'Code review',
    ],
  },
  {
    period: 'September 2019 - July 2020',
    position: 'Full stack Web-Developer at <a target="_blank" href="https://work-zilla.com">work-zilla.com</a>',
    location: 'Moskow, Russia',
    technologies: 'C#, ASP.NET CORE, React, Redux, Typescript, Postgres, MS SQL, Docker, RabbitMQ, SignalR',
    responsibilities: [
      'Development and support of the work-zilla.com website',
      'Tasks estimation',
      'Participation on project meetings',
      'Performance monitoring of the MS SQL / PostgreSQL DB',
      'New functionality development front-end, back-end',
      'Optimisation of the database query',
      'Teamcity setting',
      'Moving a monolithic 3-layer application to a microservice architecture',
      'Code review',
    ],
  },
  {
    period: 'December 2017 – September 2019',
    position: 'Fullstack developer at <a target="_blank" href="https://shop.steklodom.com/">Steklodom</a>',
    location: 'Perm, Russia',
    technologies: 'React, Redux, TypeScript, C#, ASP.NET MVC, ASP.NET CORE API, RabbitMQ, WinForms',
    responsibilities: [
      'Maintenance and development of the WinDraw software package',
      'Tasks estimation',
      'Development of a web application for a warehouse, production, logistics',
      'Performance monitoring of the MS SQL',
      'Optimisation of the database query',
      'Writing services for communication between Windraw and 1C',
      'Development of architectural solutions',
      'Code review',
    ],
  },
  {
    period: 'February 2017– December 2017',
    position: 'Delphi developer at <a target="_blank" href="https://bitmaster.ru/">Bit Master</a>',
    location: 'Izhevsk, Russia',
    technologies: 'Delphi, Fast Report',
    responsibilities: [
      'Development of software packages for business automation of a Taxi-service',
      "Writing algorithms and scripts for calculating the cost of an order incl. finding a suitable driver, calculating a driver's salary, etc.) Technologies: Delphi, fast Report",
    ],
  },
];

const EDUCATION = [
  {
    period: 'September 1992 – May 1997',
    position: 'Bachelor’s degree at <b>Izhevsk State Technical University</b>',
    location: 'Izhevsk, Russia',
    technologies: '',
    responsibilities: [
      'Faculty: Informatics and Computer Engineering',
      'Subject: Computer Software, Automated Data Processing and Control Systems',
      'Graduation: Bachelor of Science',
    ],
  },
  {
    period: '2019',
    position: '<a target="_blank" href="https://htmlacademy.ru/">HTML Academy</a>',
    location: 'St. Petersburg, Russia',
    technologies: '',
    responsibilities: ['HTML and CSS, lvl 1', 'HTML and CSS, lvl 2'],
  },
  {
    period: '2018',
    position: 'Softline',
    location: 'Ekaterinburg, Russia',
    technologies: '',
    responsibilities: ['Softline, 10987 - Performance Tuning and Optimizing SQL Databases'],
  },
];

const INFO_ROWS = [
  {
    label: 'Contact Details',
    info: `<a target="_blank" href="tel:+79630269888">+79630269888</a><br /><a target="_blank" href="mailto:egor-sima@gmail.com">egor-sima@gmail.com</a>`,
  },
  { label: 'Date of birthday', info: '01.05.1989' },
  { label: 'Nationality', info: 'Russian' },
];

function CvPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>Egor Simonov</h2>
      <table className={styles.table}>
        <tbody>
          {INFO_ROWS.map((props, i) => (
            <InfoRow key={i} {...props} />
          ))}
          <tr>
            <td colSpan={2}>
              <h3 className={styles.professionalBackground}>Professional background</h3>
            </td>
          </tr>
          {PLACES_OF_WORK.map((props, i) => (
            <PlaceOfWork key={i} {...props} />
          ))}
          <tr>
            <td colSpan={2}>
              <h3 className={styles.professionalBackground}>Education</h3>
            </td>
          </tr>
          {EDUCATION.map((props, i) => (
            <PlaceOfWork key={i} {...props} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export const CvPage = withPageWrapper(CvPageComponent);
