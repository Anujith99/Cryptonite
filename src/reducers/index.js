import { combineReducers } from "redux";
import { CRYPTOCURRENCY, BITCOIN, ETHEREUM, LITECOIN } from "helpers/constants";
import { createNewsReducer } from "./newsReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  cryptocurrency: createNewsReducer(CRYPTOCURRENCY),
  bitcoin: createNewsReducer(BITCOIN),
  ethereum: createNewsReducer(ETHEREUM),
  litecoin: createNewsReducer(LITECOIN),
  loading: loadingReducer,
  error: errorReducer,
});
