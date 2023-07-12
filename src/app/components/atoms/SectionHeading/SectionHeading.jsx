import React from 'react';
import styles from "./sectionHeading.module.scss";

function SectionHeading({text}) {
  return (
    <h1 className={styles.heading}>{text}</h1>
  )
}

export default SectionHeading