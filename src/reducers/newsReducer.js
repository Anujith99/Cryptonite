/* eslint-disable import/no-anonymous-default-export */
import { GET_ARTICLES, GET_VIDEOS, GET_AUDIO } from "actions/types";
import { produce } from "immer";

const initialState = {
  articles: [],
  videos: [],
  audio: [],
};

export const createNewsReducer = (reducerName) => {
  return function (state = initialState, action) {
    const { name } = action;
    if (name !== reducerName) return state;
    return produce(state, (draftState) => {
      switch (action.type) {
        case GET_ARTICLES:
          draftState.articles.push(...action.payload);
          break;
        case GET_VIDEOS:
          draftState.videos.push(...action.payload);
          break;
        case GET_AUDIO:
          draftState.audio.push(...action.payload);
          break;
        default:
          break;
      }
    });
  };
};
