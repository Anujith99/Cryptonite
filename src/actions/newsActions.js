import {
  GET_ARTICLES,
  GET_VIDEOS,
  GET_AUDIO,
  GET_ARTICLES_REQUEST,
  GET_VIDEOS_REQUEST,
  GET_AUDIO_REQUEST,
  GET_AUDIO_FAILED,
  GET_VIDEOS_FAILED,
  GET_ARTICLES_FAILED,
} from "./types";
import { articleAPI, videoAPI, audioAPI } from "helpers/api";

import { ARTICLES, VIDEOS, AUDIO } from "helpers/constants";
import {
  parseVideoResponse,
  parseAudioResponse,
  parseArticlesResponse,
} from "helpers/functions";

export const getArticles = (keyword, params) => {
  return async (dispatch, getState) => {
    if (getState()[keyword].news.articles.length !== 0) {
      //Check if redux state already exists
      return;
    }
    dispatch({ type: GET_ARTICLES_REQUEST });
    await articleAPI
      .get(`search?q=${keyword}`, { params })
      .then((res) =>
        dispatch({
          type: GET_ARTICLES,
          name: keyword,
          payload: parseArticlesResponse(res.data.articles),
        })
      )
      .catch((err) => dispatch({ type: GET_ARTICLES_FAILED }));
  };
  // return (dispatch) => {
  //   dispatch({
  //     type: GET_ARTICLES,
  //     name: keyword,
  //     payload: [],
  //   });
  // };
};

export const getVideos = (keyword, params) => {
  return async (dispatch, getState) => {
    if (getState()[keyword].news.videos.length !== 0) {
      //Check if redux state already exists
      return;
    }
    dispatch({ type: GET_VIDEOS_REQUEST });
    await videoAPI
      .get("", { params: { ...params, q: keyword } })
      .then((res) =>
        dispatch({
          type: GET_VIDEOS,
          name: keyword,
          payload: parseVideoResponse(res.data.items),
        })
      )
      .catch((err) => dispatch({ type: GET_VIDEOS_FAILED }));
  };
  // return (dispatch) => {
  //   dispatch({
  //     type: GET_VIDEOS,
  //     name: keyword,
  //     payload: [],
  //   });
  // };
};

export const getAudio = (keyword, params) => {
  return async (dispatch, getState) => {
    if (getState()[keyword].news.audio.length !== 0) {
      //Check if redux state already exists
      return;
    }
    dispatch({ type: GET_AUDIO_REQUEST });
    await audioAPI
      .get(`search?term=${keyword}`, { params })
      .then((res) =>
        dispatch({
          type: GET_AUDIO,
          name: keyword,
          payload: parseAudioResponse(res.data.results),
        })
      )
      .catch((err) => dispatch({ type: GET_AUDIO_FAILED }));
  };
  // return (dispatch) => {
  //   dispatch({
  //     type: GET_AUDIO,
  //     name: keyword,
  //     payload: [],
  //   });
  // };
};

export const fetchSliderItems = (type, keyword, params) => {
  return (dispatch) => {
    switch (type) {
      case ARTICLES:
        dispatch(getArticles(keyword, params));
        break;
      case VIDEOS:
        dispatch(getVideos(keyword, params));
        break;
      case AUDIO:
        dispatch(getAudio(keyword, params));
        break;
      default:
        break;
    }
  };
};
