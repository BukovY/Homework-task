import { SET_ACTOR, ACTOR_NEED_UPDATE } from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setActor = createAction(SET_ACTOR);
export const isActorNeedUpdate = createAction(ACTOR_NEED_UPDATE);
