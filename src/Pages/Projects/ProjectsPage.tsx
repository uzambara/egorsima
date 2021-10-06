import React from 'react';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';
import sharedStyles from '../Pages.scss';
import { ProjectItem } from './modules/ProjectItem/ProjectItem';

import styles from './ProjectsPage.scss';

import worzilla from './images/workzilla.png';
import pizza from './images/pizza.png';
import shipcheaper from './images/shipcheaper.png';
import technomart from './images/technomart.png';

type Props = ClassNameProps;

function ProjectsPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>projects</h2>
      <table className={styles.projectsWrapper}>
        <tbody>
          <ProjectItem
            img={worzilla}
            link={'http://technomart.egorsima.com'}
            description={
              'Application fo freelance. <br/><a target="_blank" href="https://www.work-zilla.com">Work-zilla</a>'
            }
          />
          <ProjectItem
            img={pizza}
            link={'http://pizza.egorsima.com'}
            description={
              'Test task <a target="_blank" href="https://www.innoscripta.com/en">Innoscripta</a>.<br/> Pizza delivery site.<br/><a target="_blank" href="http://pizza.egorsima.com">Pizaaaa!</a>'
            }
          />
          <ProjectItem
            img={shipcheaper}
            link={'http://pizza.egorsima.com'}
            description={
              'Startup project.<br/> ERP sytem for marketplaces (Ebay, Amazon)<br/><a target="_blank" href="https://www.ship-cheaper.com">Ship-cheaper</a>'
            }
          />
          <ProjectItem
            img={technomart}
            link={'http://pizza.egorsima.com'}
            description={
              'Study task HTML and CSS, lvl 1.<br/> Site for power tool shop. Only desktop layout.<br/><a target="_blank" href="http://www.technomart.egorsima.com">Technomart</a>'
            }
          />
        </tbody>
      </table>
    </main>
  );
}

export const ProjectsPage = withPageWrapper(ProjectsPageComponent);
