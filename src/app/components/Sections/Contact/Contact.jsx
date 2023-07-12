import React from "react";
import styles from "./contact.module.scss";
import ContactImage from "../../../../../public/images/contact-illustration.svg";
import LinkedinIcon from "../../../../../public/icons/linkedin.svg";
import GithubIcon from "../../../../../public/icons/github.svg";
import HashnodeIcon from "../../../../../public/icons/hashnode.svg";
import EmailIcon from "../../../../../public/icons/envelope-regular.svg";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { SectionLayout } from "../..";

function Contact() {
  return (
    <SectionLayout heading={"Contacts"} classes={[styles.wrapper]}>
      <div className={styles.row}>
        <div className={styles.contact}>
          <div className={styles.socialMedia}>
            <Link
              className={clsx(
                styles.socialMedia__wrapper,
                styles.socialMedia__linkedin
              )}
              href="https://www.linkedin.com/in/pranav-vyas-b27673214/"
            >
              <Image
                className={styles.socialMedia__icon}
                src={LinkedinIcon}
                priority
                alt="LinkedIn Icon"
              />
              <span className={styles.socialMedia__name}>LinkedIn</span>
            </Link>
            <Link
              className={clsx(
                styles.socialMedia__wrapper,
                styles.socialMedia__github
              )}
              href="https://github.com/pranav-Vyas"
            >
              <Image
                className={styles.socialMedia__icon}
                src={GithubIcon}
                priority
                alt="Github Icon"
              />
              <span className={styles.socialMedia__name}>Github</span>
            </Link>
            <Link
              className={clsx(
                styles.socialMedia__wrapper,
                styles.socialMedia__hashnode
              )}
              href="https://pranavvyas.hashnode.dev/"
            >
              <Image
                className={styles.socialMedia__icon}
                src={HashnodeIcon}
                priority
                alt="Hashnode Icon"
              />
              <span className={styles.socialMedia__name}>Hashnode</span>
            </Link>
          </div>
          <div className={styles.email}>
            <Image
              className={styles.email__icon}
              src={EmailIcon}
              priority
              alt="Email Icon"
            />
            <span className={styles.email__text}>pranavvyas0306@gmail.com</span>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            className={styles.image}
            src={ContactImage}
            priority
            alt="Contact Illustration Image"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Contact;
