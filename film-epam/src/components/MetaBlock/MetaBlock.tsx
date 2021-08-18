import React from "react";
import styles from "./MetaBlock.module.sass";
import classNames from "classnames/bind";
import Typography from "@material-ui/core/Typography";

export const MetaBlock = (props: {
  title: string;
  meta: string;
  prefix: string;
}) => {
  const cx = classNames.bind(styles);
  const metaBlockClass = cx("padding", {
    hide: !props.meta,
  });
  return (
    <div className={metaBlockClass}>
      <Typography variant="body2">{props.title}:</Typography>
      <Typography variant="body1">
        {props.prefix}
        {props.meta}
      </Typography>
    </div>
  );
};
