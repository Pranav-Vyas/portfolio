import React from 'react';
import styles from "./timelineRight.module.scss";
import { WorkCard } from '..';
import clsx from 'clsx';
import { work } from '@/helpers/work';

function WorkTimeline() {
  return (
    <div className={styles.timeline}>
      {work.map((work) => {
        return (
          <div key={work.id} className={clsx(styles.container, styles.right)}>
            <WorkCard designation={work.designation} year={work.year} organization={work.organization} content={work.content} />
          </div>
        );
      })}
    </div>
  )
}

export default WorkTimeline