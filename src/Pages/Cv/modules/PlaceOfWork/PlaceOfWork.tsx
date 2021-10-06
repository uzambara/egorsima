import styles from './PlaceOfWork.scss';
import cn from 'classnames';
import React from 'react';

type Props = {
  period: string;
  position: string;
  location: string;
  responsibilities: string[];
  technologies: string;
};

export function PlaceOfWork({ period, position, responsibilities, technologies, location }: Props) {
  return (
    <tr className={styles.row}>
      <td className={cn(styles.cell, styles.periodColumn)}>{period}</td>
      <td className={cn(styles.cell, styles.cellDescription)}>
        <span className={styles.position} dangerouslySetInnerHTML={{ __html: position }} />
        <br />
        {location}
        <ul>
          {responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
        Technologies: {technologies}
      </td>
    </tr>
  );
}
