import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchResult from "../reducers/search";
import artistResult from "../reducers/artistQuery";
import albumResult from "../reducers/albums";
import tracksResult from "../reducers/tracksQuery";
import player from "../reducers/player";
import like from "../reducers/like";
import popResult from "../reducers/pop";
import rockResult from "../reducers/rock";
import jazzResult from "../reducers/jazz";

const rootReducer = combineReducers({
  search: searchResult,
  artist: artistResult,
  album: albumResult,
  tracks: tracksResult,
  player: player,
  like: like,
  pop: popResult,
  rock: rockResult,
  jazz: jazzResult,
});

export const music = configureStore({
  //reducer
  reducer: rootReducer,
});
