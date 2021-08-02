import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, SET_ACTOR } from "../constants";

const initialState = {
  actorId: "",
  fetchingActor: false,
  data: {
    info: {},
    photo: [],
    knownBy: [],
  },
};

export const getActorInfo = createAsyncThunk(
  "actor/getActorInfo",
  async (inputs) => {
    let languageIn = inputs.languageSelected;
    const index = inputs.actorId;
    const obj = {
      data: {},
    };
    await fetch(
      `https://api.themoviedb.org/3/person/${index}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
    )
      .then((data) => data.json())
      .then((info) => (obj.data.info = info));
    await fetch(
      `https://api.themoviedb.org/3/person/${index}/images?api_key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((info) => (obj.data.photo = info.profiles));
    await fetch(`
https://api.themoviedb.org/3/person/${index}/movie_credits?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`)
      .then((data) => data.json())
      .then((info) => (obj.data.knownBy = info.cast));
    obj.actorId = index;
    return obj;
  }
);

const actor = createSlice({
  name: "actor",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getActorInfo.pending, (state) => {
        state.fetchingActor = true;
      })
      .addCase(getActorInfo.fulfilled, (state, action) => {
        state.fetchingActor = false;
        state.data = action.payload.data;
        state.actorId = action.payload.actorId;
      })
      .addCase(SET_ACTOR, (state, action) => {
        state.actorId = action.payload;
      });
  },
});
export default actor.reducer;
