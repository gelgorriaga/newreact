import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Wanna be sartin somethin", duration: "4:05" },
    { title: "Billy Jean", duration: "4:55" },
    { title: "Smooth Criminal", duration: "3:05" },
    { title: "Thriller", duration: "1:11" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
