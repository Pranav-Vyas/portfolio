import React from 'react';
import styles from "./blogs.module.scss";
import { BlogCard } from '..';

function Blogs() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Blogs</h1>
      <div className={styles.container}>
        <BlogCard/>
      </div>
    </section>
  )
}

export default Blogs