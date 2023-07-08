import { Banner, Education, Overview, Skills, WorkExperience } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Banner/>
      <Overview/>
      <Education/>
      <WorkExperience/>
      <Skills/>
    </div>
  )
}
