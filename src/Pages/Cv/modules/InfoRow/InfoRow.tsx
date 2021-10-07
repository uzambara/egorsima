import React from 'react';
import styles from './InfoRow.scss';
import cn from 'classnames';

type Props = {
  label: string;
  info: string;
  rowSpan?: number;
};

export function InfoRow({ label, info, rowSpan }: Props) {
  return (
    <tr>
      <td className={cn(styles.cell, styles.label)}>{label}:</td>
      <td rowSpan={rowSpan} className={styles.cell} dangerouslySetInnerHTML={{ __html: info }} />
    </tr>
  );
}
