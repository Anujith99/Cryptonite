/* eslint-disable import/no-anonymous-default-export */
import { GET_ARTICLES } from "actions/types";
import { produce } from "immer";

const initialState = {
  articles: [],
};

export default function (state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ARTICLES:
        draft.articles.push(...action.payload.data);
        break;
      default:
        break;
    }
  });
}
