import React from "react";
import styles from "./timelineRight.module.scss";
import clsx from "clsx";
import { education } from "@/helpers/education";
import { EducationCard } from "..";

function Timeline() {
  return (
    <div className={styles.timeline}>
      {education.map((edu, i) => {
        return (
          <div key={edu.id} className={clsx(styles.container, styles.right)}>
            <EducationCard degree={edu.degree} year={edu.year} institute={edu.institute} content={edu.content} />
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
