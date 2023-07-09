import { Banner, Blogs, Contact, Education, Overview, Projects, Skills, WorkExperience } from "./components";
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
      <Contact/>
    </div>
  )
}
