import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants';

import axios from 'axios';

export const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  }
}

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  }
}

export const getArtists = function() {
  return function(dispatch, getState) {
    axios.get(`/api/artists/`)
    .then(res=> {
      dispatch(receiveArtists(res.data.artists))
    })
  }
}

export const getArtist = function(artistId) {
  return function(dispatch, getState) {
    axios.get(`/api/artists/${artistId}`)
    .then(res => {
      dispatch(receiveArtist(res.data.artist))
    })
  }
}
