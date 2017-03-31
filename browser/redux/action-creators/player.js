//action creators
import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST} from '../constants'
import axios from 'axios';

export const startPlaying = () => {
  return {
    type: START_PLAYING,
    isPlaying: true
  }
}

export const stopPlaying = () => {
  return {
    type: STOP_PLAYING,
    isPlaying: false
  }
}

export const setCurrentSong = (currentSong) => {
  return {
    type: SET_CURRENT_SONG,
    currentSong
  }
}

export const setCurrentSongList = (currentSongList) => {
  return {
    type: SET_LIST,
    currentSongList
  }
}


export const getCurrentSong = function (song) {
  return function (dispatch, getState) {
    axios.get(`/api/songs/${song.id}`)
      .then(res => {
        dispatch(setCurrentSong(res.data.song));
      });
  };
};


export const getCurrentSongList = function (songList) {
  return function (dispatch, getState) {
    axios.get(`/api/songs/${songList.id}`)
      .then(res => {
        dispatch(setCurrentSongList(res.data.songList));
      });
  };
};
