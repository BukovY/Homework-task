import React, { FC } from "react";
import classNames from "classnames/bind";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
type MetaBlockProps = {
  title: string;
  meta: string;
  prefix: string;
};

const useStyles = makeStyles(() => ({
  hide: {
    display: "none",
  },
  padding: {
    paddingBottom: "10px",
  },
}));

export const MetaBlock: FC<MetaBlockProps> = ({ title, meta, prefix }) => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
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
