import { combineReducers } from "redux";
import { CRYPTOCURRENCY, BITCOIN, ETHEREUM, LITECOIN } from "helpers/constants";
import { createNewsReducer } from "./newsReducer";

export default combineReducers({
  cryptocurrency: createNewsReducer(CRYPTOCURRENCY),
  bitcoin: createNewsReducer(BITCOIN),
  ethereum: createNewsReducer(ETHEREUM),
  litecoin: createNewsReducer(LITECOIN),
});
