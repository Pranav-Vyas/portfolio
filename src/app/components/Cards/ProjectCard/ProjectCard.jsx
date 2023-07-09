'use client';
import React from "react";
import styles from "./projectCard.module.scss";
import Image from "next/image";

function ProjectCard({image, alt, text, subText, url}) {

  const onClick = () => {
    window.open(url, "_blank");
  }

  return (
    <div className={styles.wrapper}>
      <figure className={styles.imageWrapper} onClick={onClick}>
        <Image src={image} alt={alt}
          className={styles.image}/>
        <figcaption className={styles.imgCaption}>View</figcaption>
      </figure>
      <div className={styles.textBox}>
        <span className={styles.text}>{text}</span>
        <span className={styles.subText}>{subText}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
