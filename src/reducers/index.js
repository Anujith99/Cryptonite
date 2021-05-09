import { combineReducers } from "redux";
import { CRYPTOCURRENCY, BITCOIN, ETHEREUM, LITECOIN } from "helpers/constants";
import { createNewsReducer } from "./newsReducer";
import { createCryptoDataReducer } from "./cryptoDataReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const createCryptoReducer = (reducerName) => {
  return combineReducers({
    news: createNewsReducer(reducerName),
    statistics: createCryptoDataReducer(reducerName),
  });
};

export default combineReducers({
  cryptocurrency: createCryptoReducer(CRYPTOCURRENCY),
  bitcoin: createCryptoReducer(BITCOIN),
  ethereum: createCryptoReducer(ETHEREUM),
  litecoin: createCryptoReducer(LITECOIN),
  loading: loadingReducer,
  error: errorReducer,
});
