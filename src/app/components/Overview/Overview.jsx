import React from 'react'
import styles from "./overview.module.scss";

function Overview() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headingPrimaryWhite}>About Me</h1>
        <h1 className={styles.headingPrimaryYellow}>I am Pranav Vyas from India. I am a software engineer with specialization in web development.</h1>
      </div>
      <div className={styles.imageWrapper}>
        <figure className={styles.profileShape}>
        <img className={styles.profileImage} src="/images/Profile-img-transparent.png" alt="Profile Pic" />
        </figure>
      </div>
    </section>
  )
}

export default Overview