import { GET_ARTICLES, GET_VIDEOS, GET_AUDIO } from "./types";
import { articleAPI } from "helpers/api";

import { ARTICLES, VIDEOS, AUDIO } from "helpers/constants";

export const getArticles = (keyword, params) => {
  // return async (dispatch) => {
  //   articleAPI
  //     .get("", { params })
  //     .then((res) =>
  //       dispatch({
  //         type: GET_ARTICLES,
  //         name: keyword,
  //         payload: res.data.data,
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // };
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES,
      name: keyword,
      payload: [],
    });
  };
};

export const getVideos = (keyword, params) => {
  return (dispatch) => {
    dispatch({
      type: GET_VIDEOS,
      name: keyword,
      payload: [],
    });
  };
};

export const getAudio = (keyword, params) => {
  return (dispatch) => {
    dispatch({
      type: GET_AUDIO,
      name: keyword,
      payload: [],
    });
  };
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
