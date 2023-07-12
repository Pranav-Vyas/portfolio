import React from 'react';
import styles from "./sectionLayout.module.scss";
import { SectionHeading } from '../..';

function SectionLayout({heading,children}) {
  return (
    <section className={styles.wrapper}>
      {heading && <SectionHeading text={heading}/>}
      {children}
    </section>
  )
}

export default SectionLayout;