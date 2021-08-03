import { createAction } from "@reduxjs/toolkit";
import { CREW_OPEN_CHANGE, SET_MOVIE } from "../constants";

export const crewOpenChange = createAction(CREW_OPEN_CHANGE);
export const setMovie = createAction(SET_MOVIE);
