import React from 'react';
import styles from "./contact.module.scss";
import ContactImage from "../../../../public/images/contact-illustration.svg";
import Image from 'next/image';

function Contact() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.row}>
        <div className={styles.contact}></div>
        <div className={styles.illustration}>
          <Image className={styles.image} src={ContactImage} priority alt='Contact Illustration Image'/>
        </div>
      </div>
      </section>
  )
}

export default Contact