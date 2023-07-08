import React from 'react'
import styles from "./educationCard.module.scss";

function EducationCard({degree, year, institute, content}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.degree}>{degree}</h1>
      <h2 className={styles.year}>{year}</h2>
      <h3 className={styles.institute}><i>{institute}</i></h3>
      <p className={styles.content}><strong>Related Courses: </strong>{content}</p>
    </div>
  )
}

export default EducationCard