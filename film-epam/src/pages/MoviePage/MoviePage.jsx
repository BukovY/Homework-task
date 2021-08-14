import React, { useEffect } from "react";
import styles from "./MoviePage.module.sass";
import { FilmCover } from "../../components/FilmCover";
import { FilmCard } from "../../components/FilmCard";
import { MetaBlock } from "../../components/MetaBlock";
import { People } from "../../components/People";
import { PhotoCard } from "../../components/PhotoCard";
import {
  getIndexLanguage,
  matchOnlyNumber,
  minToTime,
} from "../../utils/functrions";
import { useSelector, useDispatch } from "react-redux";
import { crewOpenChange } from "../../redux/actions/movieAction";
import { getFilm } from "../../redux/reducers/movieReducers";
import { LoaderPlaceholder } from "../../components/LoaderPlaceholder";
import { moviePageTranslation } from "../../static/Translation";
import { useParams } from "react-router";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { IncorrectRequest } from "../../components/IncorrectRequest";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const MoviePage = () => {
  const { data, isCrewOpen, fetchingFilm } = useSelector(
    (state) => state.movie
  );
  const { languageSelected } = useSelector((state) => state.app);
  const film = data.info;
  const crew = data.people
    ? isCrewOpen
      ? data.people
      : data.people.slice(0, 6)
    : false;
  const dispatch = useDispatch();
  const changeOpenCrew = () => {
    let toDispatch = isCrewOpen;
    dispatch(crewOpenChange(!toDispatch));
  };
  const indexLang = getIndexLanguage(languageSelected);
  const texts = {
    title: moviePageTranslation.title[indexLang],
    overview: moviePageTranslation.overview[indexLang],
    releaseDate: moviePageTranslation.releaseDate[indexLang],
    revenue: moviePageTranslation.revenue[indexLang],
    duration: moviePageTranslation.duration[indexLang],
    topBiledCast: moviePageTranslation.topBiledCast[indexLang],
    images: moviePageTranslation.images[indexLang],
    recomendations: moviePageTranslation.recomendations[indexLang],
    close: moviePageTranslation.close[indexLang],
    showAll: moviePageTranslation.showAll[indexLang],
  };

  const { id } = useParams();
  const isRequestCorrect = matchOnlyNumber(id);

  useEffect(() => {
    if (isRequestCorrect) {
      const input = {
        selectedMovie: id,
        languageSelected,
      };
      dispatch(getFilm(input));
    }
  }, [languageSelected, id]);

  return (
    <Container>
      {!film.title && !fetchingFilm && isRequestCorrect && <NotFoundPage />}
      {!isRequestCorrect && <IncorrectRequest path={"*/movie/"} />}
      {fetchingFilm && <LoaderPlaceholder />}
      {!fetchingFilm && film.title && isRequestCorrect && (
        <Box>
          <Box className={styles.film_info}>
            <FilmCover el={film} />
            <Box>
              <Typography variant="body2">{texts.title}</Typography>
              <Typography variant="h2">{film.title}</Typography>
              <MetaBlock title={texts.overview} meta={film.overview} />
              <MetaBlock title={texts.releaseDate} meta={film.release_date} />
              <MetaBlock title={texts.revenue} meta={film.revenue} prefix="$" />
              <MetaBlock
                title={texts.duration}
                meta={minToTime(film.runtime)}
              />
              {film.genres &&
                film.genres.map((el) => (
                  <Box key={el.name} className={styles.genre}>
                    {el.name}
                  </Box>
                ))}
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h3">{texts.topBiledCast}</Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      onClick={changeOpenCrew}
                      color={isCrewOpen ? "" : "secondary"}
                    >
                      {isCrewOpen ? texts.close : texts.showAll}
                    </Button>
                  </Box>
                </Box>
                <Box className={styles.card_grid}>
                  {crew && crew.map((el) => <People key={el.id} el={el} />)}
                </Box>
              </Box>
              <Typography
                variant="h3"
                className={!data?.images?.length && styles.hide}
              >
                {texts.images}
              </Typography>
              <Box className={styles.images_grid}>
                {data.images &&
                  data.images.map((el) => (
                    <PhotoCard key={el.file_path} path={el.file_path} />
                  ))}
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h3"
            className={!data?.known?.length && styles.hide}
          >
            {texts.recomendations}
          </Typography>
          <Box className={styles.card_grid}>
            {data.known &&
              data.known.map((el) => <FilmCard key={el.id} el={el} />)}
          </Box>
        </Box>
      )}
    </Container>
  );
};
export default MoviePage;
