/* eslint-disable import/no-anonymous-default-export */
import { GET_CRYPTO_DATA, GET_CRYPTO_STATS } from "actions/types";
import { produce } from "immer";

let initialState = {
  historicalData: [],
  coinStatistics: {},
};

export const createCryptoDataReducer = (reducerName) => {
  return function (state = initialState, action) {
    const { name } = action;
    if (name !== reducerName) return state;
    return produce(state, (draftState) => {
      switch (action.type) {
        case GET_CRYPTO_DATA:
          draftState.historicalData = action.payload;
          break;
        case GET_CRYPTO_STATS:
          draftState.coinStatistics = action.payload;
          break;
        default:
          break;
      }
    });
  };
};
