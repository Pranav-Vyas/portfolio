import { Banner, Blogs,  Copyright, Education, Overview, Projects, Skills, SocialLinks, WorkExperience } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Banner/>
      <Overview/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      <Skills/>
      <Blogs/>
      <SocialLinks/>
      <Copyright/>
    </div>
  )
}
