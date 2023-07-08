import React from 'react'
import styles from "./education.module.scss";
import { TimelineAlternate } from '..';

function Education() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Education</h1>
      <TimelineAlternate/>
    </section>
  )
}

export default Education