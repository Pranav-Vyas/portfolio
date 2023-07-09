import React from 'react';
import styles from "./blogCard.module.scss";

function BlogCard() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>CSS under the hood</h1>
      <span className={styles.time}>8 min read</span>
      <p className={styles.description}>Let&apos;s learn how CSS works under the hood. Read this comprehensive guide to explore the inner working of CSS and dive into its technical aspects.</p>
      <a href="https://pranavvyas.hashnode.dev/css-under-the-hood" className={styles.button}>Read more &rarr;</a>
    </div>
  )
}

export default BlogCard