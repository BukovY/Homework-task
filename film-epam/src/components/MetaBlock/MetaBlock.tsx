import React, { FC } from "react";
import styles from "./MetaBlock.module.sass";
import classNames from "classnames/bind";
import Typography from "@material-ui/core/Typography";
type MetaBlockProps = {
  title: string;
  meta: string;
  prefix: string;
};
export const MetaBlock: FC<MetaBlockProps> = ({ title, meta, prefix }) => {
  const cx = classNames.bind(styles);
  const metaBlockClass = cx("padding", {
    hide: !meta,
  });
  return (
    <div className={metaBlockClass}>
      <Typography variant="body2">{title}:</Typography>
      <Typography variant="body1">
        {prefix}
        {meta}
      </Typography>
    </div>
  );
};
