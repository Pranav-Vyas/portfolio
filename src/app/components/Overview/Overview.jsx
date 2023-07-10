import React from "react";
import styles from "./overview.module.scss";
import Link from "next/link";

function Overview() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headingPrimaryWhite}>About Me</h1>
        <h1 className={styles.headingPrimaryYellow}>
          I am Pranav Vyas, a software engineer with specialization in web
          development, having a knack of writing elegant code and developing
          applications using cutting-edge technologies.
        </h1>
        <Link className={styles.button} href="https://drive.google.com/file/d/15k7Iz3dIVLlr7x6gX0b3X83LDCSzEpia/view?usp=sharing">Resume</Link>
      </div>
      <div className={styles.imageWrapper}>
        <figure className={styles.profileShape}>
          <img
            className={styles.profileImage}
            src="/images/Profile-img-transparent.png"
            alt="Profile Pic"
          />
        </figure>
      </div>
    </section>
  );
}

export default Overview;
