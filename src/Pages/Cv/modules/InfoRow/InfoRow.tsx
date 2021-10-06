import React from 'react';
import styles from './InfoRow.scss';
import cn from 'classnames';

type Props = {
  label: string;
  info: string;
};

export function InfoRow({ label, info }: Props) {
  return (
    <tr>
      <td className={cn(styles.cell, styles.label)}>{label}:</td>
      <td className={styles.cell} dangerouslySetInnerHTML={{ __html: info }} />
    </tr>
  );
}
