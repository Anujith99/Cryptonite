import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";

// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// export let store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), ReactReduxDevTools)
// );

export let store = createStore(rootReducer, applyMiddleware(thunk));
