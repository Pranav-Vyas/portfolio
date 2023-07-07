import { Banner, Overview, WorkExperience } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Banner/>
      <Overview/>
      <WorkExperience/>
    </div>
  )
}
