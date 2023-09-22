import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchResult from "../reducers/search";
import artistResult from "../reducers/artistQuery";
import albumResult from "../reducers/albums";
import tracksResult from "../reducers/tracksQuery";
import player from "../reducers/player";
import like from "../reducers/like";

const rootReducer = combineReducers({
  search: searchResult,
  artist: artistResult,
  album: albumResult,
  tracks: tracksResult,
  player: player,
  like: like,
});

export const music = configureStore({
  //reducer
  reducer: rootReducer,
});
