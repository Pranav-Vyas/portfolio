import React from "react";
import styles from "./banner.module.scss";
import { Cedarville_Cursive } from "next/font/google";
import LinkedinIcon from "../../../../public/icons/linkedin.svg";
import GithubIcon from "../../../../public/icons/github.svg";
import HashnodeIcon from "../../../../public/icons/hashnode.svg";
import EnvelopeIcon from "../../../../public/icons/envelope-regular.svg";
import Image from "next/image";
import Link from "next/link";

const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
});

function Banner() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.name}>Pranav Vyas</h3>
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
        <h1 className={styles.headingPrimaryWhite}>Hi, I&apos;m Pranav</h1>
        <h1 className={styles.headingPrimaryYellow}>A Software Engineer</h1>
      </div>
    </section>
  );
}

export default Banner;
