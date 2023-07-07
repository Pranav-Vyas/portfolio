import React from 'react'
import styles from "./banner.module.scss";

function Banner() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.headingPrimaryWhite}>Hi, I&apos;m Pranav</h1>
        <h1 className={styles.headingPrimaryYellow}>A Software Engineer</h1>
    </section>
  )
}

export default Banner