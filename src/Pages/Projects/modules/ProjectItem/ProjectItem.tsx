import React from 'react';
import styles from './ProjectItem.scss';

type Props = {
  img: string;
  description: string;
  link: string;
};

export function ProjectItem({ img, description, link }: Props) {
  return (
    <tr className={styles.wrapper}>
      <td>
        <a className={styles.link} target={'_blank'} href={link}>
          <img src={img} alt={img} className={styles.img} />
        </a>
      </td>
      <td>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      </td>
    </tr>
  );
}
