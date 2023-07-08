import React from 'react'
import styles from "./workExperience.module.css";
import {  WorkTimeline } from '..';

function WorkExperience() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Work Experience</h1>
      <WorkTimeline/>
    </section>
  )
}

export default WorkExperience