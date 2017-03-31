import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';
import { convertAlbum, convertAlbums } from '../../react/utils';

import axios from 'axios';

export const receiveAlbums = (songs) => {
  return {
    type: RECEIVE_ALBUMS,
    songs
  }
}

export const receiveAlbum = (song) => {
  return {
    type: RECEIVE_ALBUM,
    song
  }
}

export const getAlbums = function() {
  return function(dispatch, getState) {
    axios.get(`/api/albums/`)
    .then(res=> {
      dispatch(receiveAlbums(convertAlbums(res.data.songs)))
    })
  }
}

export const getAlbum = function(albumId) {
  return function(dispatch, getState) {
    axios.get(`/api/albums/${albumId}`)
    .then(res => {
      dispatch(receiveAlbum(convertAlbum(res.data.song)))
    })
  }
}
