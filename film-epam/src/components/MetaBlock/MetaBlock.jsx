import React from "react";
import styles from "./MetaBlock.module.sass";
import classNames from "classnames/bind";

const MetaBlock = ({ title, meta, prefix }) => {
  const cx = classNames.bind(styles);
  const metaBlockClass = cx({
    hide: !meta,
  });
  return (
    <div className={metaBlockClass}>
      <p className={styles.meta_title}>{title}:</p>
      <p>
        {prefix}
        {meta}
      </p>
    </div>
  );
};
export default MetaBlock;
