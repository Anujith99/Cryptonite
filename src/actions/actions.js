import { GET_ARTICLES } from "./types";
import { articleAPI } from "helpers/api";

export const getArticles = (params) => {
  return async (dispatch) => {
    articleAPI
      .get("", { params })
      .then((res) =>
        dispatch({
          type: GET_ARTICLES,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
