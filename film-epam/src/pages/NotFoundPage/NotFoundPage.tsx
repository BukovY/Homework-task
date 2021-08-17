import React from "react";
import { useHistory } from "react-router-dom";
import { setFilter } from "../../redux/actions/appAction";
import { useDispatch, useSelector } from "react-redux";
import { getIndexLanguage } from "../../utils/functrions";
import { notFoundPageTranslation } from "../../static/Translation";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {RootState} from "../../redux/store";

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filter, languageSelected } = useSelector((state: RootState) => state.app);
  const goTo = (label:string) => {
    dispatch(setFilter(label));
    history.push("/");
  };
  const indLang = getIndexLanguage(languageSelected);
  const texts = {
    h1: notFoundPageTranslation.h1[indLang],
    headline: notFoundPageTranslation.headline[indLang],
    popular: notFoundPageTranslation.popular[indLang],
    topRated: notFoundPageTranslation.topRated[indLang],
    upcoming: notFoundPageTranslation.upcoming[indLang],
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">{texts.h1}</Typography>
        <Typography variant="subtitle1">{texts.headline}</Typography>
        <Button onClick={() => goTo(filter[0])} variant="contained">
          {texts.popular}
        </Button>
        <Button onClick={() => goTo(filter[1])} variant="contained">
          {texts.topRated}
        </Button>
        <Button onClick={() => goTo(filter[2])} variant="contained">
          {texts.upcoming}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
