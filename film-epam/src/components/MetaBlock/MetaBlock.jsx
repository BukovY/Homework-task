import React from "react";
import styles from "./MetaBlock.module.sass";

const MetaBlock = ({ title, meta, prefix }) => {
  return (<div>
      <p className={styles.meta_title}>{title}:</p>
      <p>
        {prefix && prefix}
        {meta}
      </p>
    </div>);
};
export default MetaBlock;
