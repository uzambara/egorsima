import React from 'react';
import './style.scss';
import { Redirect, Route, Router, Switch } from 'react-router';
import { globalHistory, ROUTES } from './Routing';
import { AboutPage, ContactsPage, CvPage, ProjectsPage } from './Pages';
import Modal from 'react-modal';

type Props = {};

Modal.setAppElement('#app');

export function App({}: Props) {
  return (
    <Router history={globalHistory}>
      <Switch>
        <Route path={ROUTES.About}>
          <AboutPage />
        </Route>
        <Route path={ROUTES.Cv}>
          <CvPage />
        </Route>
        <Route path={ROUTES.Projects}>
          <ProjectsPage />
        </Route>
        <Route path={ROUTES.Contacts}>
          <ContactsPage />
        </Route>
        <Redirect to={ROUTES.About} />
      </Switch>
    </Router>
  );
}
