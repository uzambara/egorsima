import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from '../../Routing';
import styles from './Header.scss';
import cn from 'classnames';

type Props = {};

export function Header({}: Props) {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <header className={styles.header}>
      <menu className={styles.menu}>
        <ul className={styles.menuItems}>
          <Link
            className={cn(styles.menuItem, { [styles.menuItem_active]: pathname === ROUTES.About })}
            to={ROUTES.About}
          >
            about
          </Link>
          <Link className={cn(styles.menuItem, { [styles.menuItem_active]: pathname === ROUTES.Cv })} to={ROUTES.Cv}>
            experience
          </Link>
          <Link
            className={cn(styles.menuItem, { [styles.menuItem_active]: pathname === ROUTES.Projects })}
            to={ROUTES.Projects}
          >
            projects
          </Link>
          <Link
            className={cn(styles.menuItem, { [styles.menuItem_active]: pathname === ROUTES.Contacts })}
            to={ROUTES.Contacts}
          >
            contacts
          </Link>
        </ul>
      </menu>
    </header>
  );
}
