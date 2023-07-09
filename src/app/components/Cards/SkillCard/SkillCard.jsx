import clsx from "clsx";
import Image from "next/image";
import React from "react";
import styles from "./skillCard.module.scss";

function SkillCard({ logo, alt, classes = [], textClasses = [], text }) {
  return (
    <div className={clsx(styles.skill, ...classes)}>
      <Image className={clsx(styles.logo)} src={logo} priority alt={alt} />
      <span className={clsx(styles.name, ...textClasses)}>{text}</span>
    </div>
  );
}

export default SkillCard;
