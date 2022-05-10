import React from 'react';
import styles from './ContactItem.scss';
import cn from 'classnames';

type Props = {
  label: string;
  contact: string;
  img: string;
};

export function ContactItem({ label, contact, img }: Props) {
  return (
    <tr>
      <td className={cn(styles.label, styles.cell)}>
        <img className={styles.img} width={20} height={20} src={img} alt={label} />
        {label}:
      </td>
      <td className={cn(styles.cell, styles.contact)} dangerouslySetInnerHTML={{ __html: contact }} />
    </tr>
  );
}
