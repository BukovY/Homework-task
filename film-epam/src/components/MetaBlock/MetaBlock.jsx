import React from "react";
import styles from "./MetaBlock.module.sass";

const MetaBlock = ({ title, meta, prefix }) => (
  <div className={meta ? "" : styles.hide}>
    <p className={styles.meta_title}>{title}:</p>
    <p>
      {prefix && prefix}
      {meta}
    </p>
  </div>
);
export default MetaBlock;
