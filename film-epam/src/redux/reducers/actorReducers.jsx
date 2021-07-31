import { SET_ACTOR, SET_ACTOR_DATA } from "../constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actorId: "",
  data: {
    info: {},
    photo: [],
    knownBy: [],
  },
};

const actorReducers = createSlice({
  name: "actorReducers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SET_ACTOR, (state, action) => {
        state.actorId = action.payload;
      })
      .addCase(SET_ACTOR_DATA, (state, action) => {
        state.data = action.payload;
      });
  },
});
export default actorReducers.reducer;
