import React from 'react';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';
import sharedStyles from '../Pages.scss';

type Props = ClassNameProps;

function ProjectsPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>projects</h2>
      <ul>
        <li>
          <a target={'_blank'} href={'http://technomart.egorsima.com'}>
            Technomart
          </a>
        </li>
        <li>
          <a target={'_blank'} href={'http://pizza.egorsima.com'}>
            Pizza
          </a>
        </li>
      </ul>
    </main>
  );
}

export const ProjectsPage = withPageWrapper(ProjectsPageComponent);
