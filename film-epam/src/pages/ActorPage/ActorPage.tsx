import React, { useEffect } from "react";
import styles from "./ActorPage.module.sass";
import { MetaBlock } from "../../components/MetaBlock";
import { PhotoCard } from "../../components/PhotoCard";
import { FilmCard } from "../../components/FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { getActorInfo } from "../../redux/reducers/actorReducers";
import { LoaderPlaceholder } from "../../components/LoaderPlaceholder";
import { actorPageTranslation } from "../../static/Translation";
import { getIndexLanguage } from "../../utils/functrions";
import { useParams } from "react-router";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { matchOnlyNumber } from "../../utils/functrions";
import { IncorrectRequest } from "../../components/IncorrectRequest";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { RootState } from "../../redux/store";
import {QuizParams} from "../../types/useParams";
import {movieDetails} from "../../types/movie";

const ActorPage = () => {
  const { data, fetchingActor } = useSelector((state:RootState) => state.actor);
  const { languageSelected } = useSelector((state:RootState) => state.app);
  const person:any = data.info;
  const dispatch = useDispatch();
  const indexLang = getIndexLanguage(languageSelected);
  const texts = {
    birthday: actorPageTranslation.birthday[indexLang],
    place: actorPageTranslation.placeOfBirth[indexLang],
    biography: actorPageTranslation.biography[indexLang],
    photo: actorPageTranslation.photos[indexLang],
    known: actorPageTranslation.knownBy[indexLang],
  };
  const { id } = useParams<QuizParams>();
  const isRequestCorrect = matchOnlyNumber(id);

  useEffect(() => {
    if (isRequestCorrect) {
      const inputs= {
        actorId: id,
        languageSelected,
      };
      dispatch(getActorInfo(inputs));
    }
  }, [id, languageSelected]);


  const photoClass = !data?.photo?.length ? undefined : styles.hide
  return (
    <Container>
      {!person.name && !fetchingActor && isRequestCorrect && <NotFoundPage />}
      {!isRequestCorrect && <IncorrectRequest path={"*/actor/"} />}
      {fetchingActor && isRequestCorrect && <LoaderPlaceholder />}
      {!fetchingActor && person.name && isRequestCorrect && (
        <Box className={styles.actor_page}>
          <Box className={styles.actor_info}>
            <Box>
              <PhotoCard path={person.profile_path} />
            </Box>
            <Box>
              <Typography variant="h1">{person.name}</Typography>
              <MetaBlock title={texts.birthday} meta={person.birthday} prefix=''/>
              <MetaBlock title={texts.place} meta={person.place_of_birth} prefix=''/>
              <MetaBlock title={texts.biography} meta={person.biography} prefix=''/>
              <Typography
                variant="h3"
                className={photoClass}
              >
                {texts.photo}
              </Typography>
              <Box className={styles.actor_grid}>
                {data.photo &&
                  data.photo.map((el:{file_path: string}) => (
                    <PhotoCard key={el.file_path} path={el.file_path} />
                  ))}
              </Box>
            </Box>
          </Box>
          <Typography variant="h3">{texts.known}</Typography>
          <Box className={styles.actor_grid}>
            {data.knownBy &&
              data.knownBy.map((el: movieDetails) => <FilmCard key={el.id} el={el} />)}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ActorPage;
