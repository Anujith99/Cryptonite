import {
  GET_CRYPTO_DATA,
  GET_CRYPTO_DATA_REQUEST,
  GET_CRYPTO_DATA_FAILED,
  GET_CRYPTO_STATS,
  GET_CRYPTO_STATS_REQUEST,
  GET_CRYPTO_STATS_FAILED,
} from "./types";

import { cryptoAPI } from "helpers/api";
import { isObjectEmpty, parseCryptoData } from "helpers/functions";

export const getCryptoData = (cryptoType) => {
  const params = {
    vs_currency: "usd",
    days: 7,
    interval: "daily",
  };

  return async (dispatch, getState) => {
    if (getState()[cryptoType].statistics.historicalData.length !== 0) {
      return;
    }
    dispatch({ type: GET_CRYPTO_DATA_REQUEST });
    await cryptoAPI
      .get(`coins/${cryptoType}/market_chart`, { params })
      .then((res) =>
        dispatch({
          type: GET_CRYPTO_DATA,
          payload: parseCryptoData(res.data.prices),
          name: cryptoType,
        })
      )
      .catch((err) => dispatch({ type: GET_CRYPTO_DATA_FAILED }));
  };
};

export const getCryptoStats = (cryptoType) => {
  const params = {
    ids: cryptoType,
    vs_currencies: "usd",
    include_24hr_vol: true,
    include_market_cap: true,
    include_24hr_change: true,
  };

  return async (dispatch, getState) => {
    if (!isObjectEmpty(getState()[cryptoType].statistics.coinStatistics)) {
      return;
    }
    dispatch({ type: GET_CRYPTO_STATS_REQUEST });
    await cryptoAPI
      .get(`simple/price`, { params })
      .then((res) =>
        dispatch({
          type: GET_CRYPTO_STATS,
          payload: res.data[cryptoType],
          name: cryptoType,
        })
      )
      .catch((err) => dispatch({ type: GET_CRYPTO_STATS_FAILED }));
  };
};
