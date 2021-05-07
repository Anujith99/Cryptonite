/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ARTICLES,
  GET_AUDIO,
  GET_VIDEOS,
  GET_ARTICLES_REQUEST,
  GET_AUDIO_REQUEST,
  GET_VIDEOS_REQUEST,
  GET_AUDIO_FAILED,
  GET_VIDEOS_FAILED,
  GET_ARTICLES_FAILED,
} from "actions/types";
import { produce } from "immer";

const initialState = {
  articlesLoading: false,
  videosLoading: false,
  audioLoading: false,
};

export default function (state = initialState, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case GET_ARTICLES_REQUEST:
        draftState.articlesLoading = true;
        break;
      case GET_ARTICLES:
      case GET_ARTICLES_FAILED:
        draftState.articlesLoading = false;
        break;
      case GET_VIDEOS_REQUEST:
        draftState.videosLoading = true;
        break;
      case GET_VIDEOS:
      case GET_VIDEOS_FAILED:
        draftState.videosLoading = false;
        break;
      case GET_AUDIO_REQUEST:
        draftState.audioLoading = true;
        break;
      case GET_AUDIO:
      case GET_AUDIO_FAILED:
        draftState.audioLoading = false;
        break;
      default:
        break;
    }
  });
}
