import React from 'react';
import styles from "./sectionLayout.module.scss";
import { SectionHeading } from '../..';
import clsx from 'clsx';

function SectionLayout({heading, classes = [], children}) {
  return (
    <section className={clsx(styles.wrapper, ...classes)}>
      {heading && <SectionHeading text={heading}/>}
      {children}
    </section>
  )
}

export default SectionLayout;