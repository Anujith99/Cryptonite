/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ARTICLES_FAILED,
  GET_ARTICLES_REQUEST,
  GET_VIDEOS_FAILED,
  GET_VIDEOS_REQUEST,
  GET_AUDIO_FAILED,
  GET_AUDIO_REQUEST,
  GET_CRYPTO_DATA_FAILED,
  GET_CRYPTO_DATA_REQUEST,
  GET_CRYPTO_STATS_FAILED,
  GET_CRYPTO_STATS_REQUEST,
} from "actions/types";
import { produce } from "immer";

const initialState = {
  articlesError: false,
  videosError: false,
  audioError: false,
  cryptoDataError: false,
  cryptoStatsError: false,
};

export default function (state = initialState, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case GET_AUDIO_REQUEST:
        draftState.audioError = false;
        break;
      case GET_AUDIO_FAILED:
        draftState.audioError = true;
        break;
      case GET_VIDEOS_REQUEST:
        draftState.videosError = false;
        break;
      case GET_VIDEOS_FAILED:
        draftState.videosError = true;
        break;
      case GET_ARTICLES_REQUEST:
        draftState.articlesError = false;
        break;
      case GET_ARTICLES_FAILED:
        draftState.articlesError = true;
        break;
      case GET_CRYPTO_DATA_REQUEST:
        draftState.cryptoDataError = false;
        break;
      case GET_CRYPTO_DATA_FAILED:
        draftState.cryptoDataError = true;
        break;
      case GET_CRYPTO_STATS_REQUEST:
        draftState.cryptoStatsError = false;
        break;
      case GET_CRYPTO_STATS_FAILED:
        draftState.cryptoStatsError = true;
        break;
      default:
        break;
    }
  });
}
