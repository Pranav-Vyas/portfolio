import React from "react";
import styles from "./projects.module.scss";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import TwitterImage from "../../../../../public/images/twitter-cover.jpg";
import BloodDonationImage from "../../../../../public/images/blood-donation.jpg";
import PortfolioImage from "../../../../../public/images/portfolio-cover.jpg";
import { SectionLayout } from "../..";

function Projects() {
  return (
    <SectionLayout heading={"Projects"}>
      <div className={styles.grid}>
        <ProjectCard
          image={TwitterImage}
          alt={"Twitter Image"}
          text={"Twitter-Clone"}
          subText={"MERN stack"}
          url={"https://github.com/Pranav-Vyas/Twitter-Clone"}
        />
        <ProjectCard
          image={BloodDonationImage}
          alt={"Blood Donation Image"}
          text={"Redbank"}
          subText={"HTML, CSS, Nodejs, MongoDB"}
          url={"https://github.com/Pranav-Vyas/RedBank"}
        />
        <ProjectCard
          image={PortfolioImage}
          alt={"Portfolio Image"}
          text={"Portfolio"}
          subText={"Next.js"}
          url={"https://github.com/pranav-Vyas/portfolio"}
        />
      </div>
    </SectionLayout>
  );
}

export default Projects;
