/* eslint-disable import/no-anonymous-default-export */
import { GET_ARTICLES } from "actions/types";
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
    return produce(state, (draft) => {
      switch (action.type) {
        case GET_ARTICLES:
          draft.articles.push(...action.payload);
          break;
        default:
          break;
      }
    });
  };
};
