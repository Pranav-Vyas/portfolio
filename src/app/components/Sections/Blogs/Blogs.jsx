import React from "react";
import styles from "./blogs.module.scss";
import { BlogCard, SectionLayout } from "../..";

function Blogs() {
  return (
    <SectionLayout heading={"Blogs"}>
      <div className={styles.container}>
        <BlogCard />
      </div>
    </SectionLayout>
  );
}

export default Blogs;
