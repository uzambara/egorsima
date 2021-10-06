import React from 'react';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';
import sharedStyles from '../Pages.scss';

type Props = ClassNameProps;

function ProjectsPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>projects</h2>
    </main>
  );
}

export const ProjectsPage = withPageWrapper(ProjectsPageComponent);
