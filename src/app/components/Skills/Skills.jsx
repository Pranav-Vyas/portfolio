import React from "react";
import styles from "./skills.module.scss";
import Image from "next/image";
import PythonLogo from "../../../../public/logos/Python.svg";
import JavaScriptLogo from "../../../../public/logos/JavaScript.svg";

function Skills() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.grid}>
        <div className={styles.skill}>
          <Image
            className={styles.logo}
            src={PythonLogo}
            priority
            alt="Python Logo"
          />
          <span className={styles.name}>Python</span>
        </div>
        {/* <div className={styles.skill}>
          <Image
            className={styles.logo}
            src={JavaScriptLogo}
            priority
            alt="JavaScript Logo"
          />
          <span className={styles.name}>JavaScript</span>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
