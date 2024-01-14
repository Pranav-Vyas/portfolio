import React from "react";
import styles from "./banner.module.scss";
import { Cedarville_Cursive } from "next/font/google";
import LinkedinIcon from "../../../../../public/icons/linkedin.svg";
import GithubIcon from "../../../../../public/icons/github.svg";
import LeetcodeIcon from "../../../../../public/icons/leetcode.svg";
import HashnodeIcon from "../../../../../public/icons/hashnode.svg";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
});

function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <Link
            className={styles.link}
            href="https://www.linkedin.com/in/pranav-vyas-b27673214/"
          >
            <Image
              className={styles.icon}
              src={LinkedinIcon}
              priority
              alt="LinkedIn Icon"
            />
          </Link>
          <Link className={styles.link} href="https://github.com/pranav-Vyas">
            <Image
              className={styles.icon}
              src={GithubIcon}
              priority
              alt="Github Icon"
            />
          </Link>
          <Link className={styles.link} href="https://leetcode.com/Pranav_Vyas/">
            <Image
              className={styles.icon}
              src={LeetcodeIcon}
              priority
              alt="Leetcode Icon"
            />
          </Link>
          <Link className={styles.link} href="https://pranavvyas.hashnode.dev/">
            <Image
              className={styles.icon}
              src={HashnodeIcon}
              priority
              alt="Hashnode Icon"
            />
          </Link>
          {/* <Link className={styles.link} href="mailto:pranavvyas2016@gmail.com">
            <Image
              className={styles.icon}
              src={EnvelopeIcon}
              priority
              alt="Email Icon"
            />
          </Link> */}
        </nav>
      </header>
      <div className={styles.centerTextBox}>
        <div className={styles.greeting}>
          <h1 className={clsx(styles.headingPrimaryWhite2, styles.greet1)}>Hello</h1>
          <h1 className={clsx(styles.headingPrimaryWhite2, styles.greet2)}>नमस्कार</h1>
          <h1 className={clsx(styles.headingPrimaryWhite2, styles.greet3)}>ನಮಸ್ಕಾರ</h1>
          <h1 className={clsx(styles.headingPrimaryWhite2, styles.greet4)}>হ্যালো</h1>
          <h1 className={clsx(styles.headingPrimaryWhite2, styles.greet5)}>こんにちは</h1>
        </div>
        <h1 className={styles.headingPrimaryYellow}>I am Pranav</h1>
      </div>
    </section>
  );
}

export default Banner;
