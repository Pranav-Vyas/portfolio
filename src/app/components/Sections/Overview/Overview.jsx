import React from "react";
import styles from "./overview.module.scss";
import Link from "next/link";

function Overview() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <figure className={styles.profileShape}>
          <img
            className={styles.profileImage}
            src="/images/Profile-img-transparent.png"
            alt="Profile Pic"
          />
        </figure>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>About Me</h1>
        <h1 className={styles.text}>
          I am Pranav Vyas, a software engineer with specialization in web
          development. I have done my bachelor&apos;s in Information Technology.
          In pursuit of my professional growth, I look forward to join an
          organization that encourages growth, innovation and a positive work
          culture.
        </h1>
        <Link
          className={styles.button}
          href="https://drive.google.com/file/d/15k7Iz3dIVLlr7x6gX0b3X83LDCSzEpia/view?usp=sharing"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}

export default Overview;
