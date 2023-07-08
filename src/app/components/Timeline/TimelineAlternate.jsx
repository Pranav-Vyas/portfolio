import React from "react";
import styles from "./timeline.module.scss";
import clsx from "clsx";

function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={clsx(styles.container, styles.left)}>
        <div className={styles.content}>
        <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
        </div>
      </div>
      <div className={clsx(styles.container, styles.right)}>
        <div className={styles.content}>
        <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
        </div>
      </div>
      <div className={clsx(styles.container, styles.left)}>
        <div className={styles.content}>
        <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
        </div>
      </div>
      <div className={clsx(styles.container, styles.right)}>
        <div className={styles.content}>
        <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
