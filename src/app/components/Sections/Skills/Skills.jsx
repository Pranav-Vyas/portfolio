import React from "react";
import styles from "./skills.module.scss";
import { SectionLayout, SkillCard } from "../..";
import HtmlLogo from "../../../../../public/logos/HTML.svg";
import CSSLogo from "../../../../../public/logos/CSS.svg";
import ReactLogo from "../../../../../public/logos/React.svg";
import JavaScriptLogo from "../../../../../public/logos/JavaScript.svg";
import NodeLogo from "../../../../../public/logos/Node.svg";
import MongoDBLogo from "../../../../../public/logos/MongoDB.svg";
import ExpressLogo from "../../../../../public/logos/Express.svg";
import ReduxLogo from "../../../../../public/logos/Redux.svg";
import PythonLogo from "../../../../../public/logos/Python.svg";
import NextJSLogo from "../../../../../public/logos/NextJS.svg";

function Skills() {
  return (
    <SectionLayout heading={"Skills"}>
      <div className={styles.grid}>
        <SkillCard
          logo={HtmlLogo}
          alt={"HTML Logo"}
          text={"HTML"}
          classes={[styles.bgYellow]}
        />
        <SkillCard
          logo={CSSLogo}
          alt={"CSS Logo"}
          text={"CSS"}
          classes={[styles.bgRed]}
        />
        <SkillCard
          logo={JavaScriptLogo}
          alt={"JavaScript Logo"}
          text={"JavaScript"}
          classes={[styles.bgPink1]}
        />
        <SkillCard
          logo={ReactLogo}
          alt={"React Logo"}
          text={"React"}
          classes={[styles.bgIndigo]}
          textClasses={[styles.textWhite]}
        />
        <SkillCard
          logo={NextJSLogo}
          alt={"NextJS Logo"}
          text={"NextJS"}
          classes={[styles.bgGreen1]}
        />
        <SkillCard
          logo={ReduxLogo}
          alt={"Redux-toolkit Logo"}
          text={"Redux-Toolkit"}
          classes={[styles.bgCream]}
        />
        <SkillCard
          logo={NodeLogo}
          alt={"Nodejs Logo"}
          text={"NodeJS"}
          classes={[styles.bgPeach]}
        />
        <SkillCard
          logo={ExpressLogo}
          alt={"Expressjs Logo"}
          text={"ExpressJS"}
          classes={[styles.bgOrange]}
        />
        <SkillCard
          logo={MongoDBLogo}
          alt={"MongoDB Logo"}
          text={"MongoDB"}
          classes={[styles.bgGreen3]}
          textClasses={[styles.textWhite]}
        />
        <SkillCard
          logo={PythonLogo}
          alt={"Python Logo"}
          text={"Python"}
          classes={[styles.bgPurple]}
          textClasses={[styles.textWhite]}
        />
      </div>
    </SectionLayout>
  );
}

export default Skills;
