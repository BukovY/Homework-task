import React from "react";
import styles from "./NotFoundPage.module.sass";
import { Link, useHistory } from "react-router-dom";
import { setFilter } from "../../redux/actions/appAction";
import { useDispatch, useSelector } from "react-redux";
import { getIndexLanguage } from "../../utils/functrions";
import { notFoundPageTranslation } from "../../static/Translation";

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filter, languageSelected } = useSelector((state) => state.app);
  const goTo = (label) => {
    dispatch(setFilter(label));
    history.push("/");
  };
  const indLang = getIndexLanguage(languageSelected);
  return (
    <div className={styles.box}>
      <h1>{notFoundPageTranslation.h1[indLang]}</h1>
      <p>{notFoundPageTranslation.headline[indLang]}</p>
      <Link to="/" onClick={() => goTo(filter[0])}>
        {notFoundPageTranslation.popular[indLang]}
      </Link>
      <Link to="/" onClick={() => goTo(filter[1])}>
        {notFoundPageTranslation.topRated[indLang]}
      </Link>
      <Link to="/" onClick={() => goTo(filter[2])}>
        {notFoundPageTranslation.upcoming[indLang]}
      </Link>
    </div>
  );
};

export default NotFoundPage;
