import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../constants";

const initialState = {
  fetchingActor: false,
  actorNeedUpdate: false,
  data: {
    info: Object as Object | undefined,
    photo: [],
    knownBy: [],
  },
};
interface InputsType {
  languageSelected: String;
  actorId: any;
}
export const getActorInfo = createAsyncThunk(
  "actor/getActorInfo",
  async (inputs: InputsType) => {
    let languageIn = inputs.languageSelected;
    const index = inputs.actorId;
    const obj = {
      data: {
        info: Object,
        photo: [],
        knownBy: [],
      },
      actorId: 0,
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActorInfo.pending, (state) => {
        state.fetchingActor = true;
      })
      .addCase(getActorInfo.fulfilled, (state, action) => {
        state.fetchingActor = false;
        state.data = action.payload.data;
      });
  },
});
export default actor.reducer;
