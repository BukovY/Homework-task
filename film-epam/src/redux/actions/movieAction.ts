import { createAction } from "@reduxjs/toolkit";
import { CREW_OPEN_CHANGE } from "../constants";

export const crewOpenChange = createAction<boolean>(CREW_OPEN_CHANGE);
