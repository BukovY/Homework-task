import React from "react";
import s from "./MetaBlock.module.sass";

const MetaBlock = ({ title, meta, prefix }) => {
  return (
    <div>
      <p className={s.meta_title}>{title}:</p>
      <p>
        {prefix ? prefix : ""}
        {meta}
      </p>
    </div>
  );
};
export default MetaBlock;
