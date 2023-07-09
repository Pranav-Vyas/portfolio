import React from "react";
import styles from "./copyright.module.scss";

function Copyright() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapper__text}>
        &copy; Copyright 2023 <strong>Pranav Vyas</strong>. All Rights Reserved
      </span>
    </div>
  );
}

export default Copyright;
