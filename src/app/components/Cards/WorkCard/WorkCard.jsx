import React from 'react';
import styles from "./workCard.module.scss";

function WorkCard({designation, year, organization, content = []}) {
  return (
    <div className={styles.wrapper}>
    <h1 className={styles.degree}>{designation}</h1>
    <h2 className={styles.year}>{year}</h2>
    <h3 className={styles.institute}><i>{organization}</i></h3>
    <div className={styles.content}>
      <ul>
        {
          content.map((item,i) => {
            return <li key={i} className={styles.item}>{item}</li>
          })
        }
      </ul>
    </div>
  </div>
  )
}

export default WorkCard