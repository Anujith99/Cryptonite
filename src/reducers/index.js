import { combineReducers } from "redux";
import { createNewsReducer } from "./newsReducer";

export default combineReducers({
  cryptocurrency: createNewsReducer("cryptocurrency"),
  bitcoin: createNewsReducer("bitcoin"),
  ethereum: createNewsReducer("ethereum"),
  litecoin: createNewsReducer("litecoin"),
});
