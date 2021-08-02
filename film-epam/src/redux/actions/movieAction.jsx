import { createAction } from "@reduxjs/toolkit";
import { CREW_OPEN_CHANGE, MOVIE_NEED_UPDATE } from "../constants";

export const crewOpenChange = createAction(CREW_OPEN_CHANGE);
export const isMovieNeedUpdate = createAction(MOVIE_NEED_UPDATE);
