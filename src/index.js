import React from "react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import ReactDOM from "react-dom";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECRIEMENT":
//       return state - action.payload;
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log("current state", store.getState());
// });
// store.dispatch({
//   type: "INCREMENT",
//   payload: 1,
// });
// store.dispatch({
//   type: "DECRIEMENT",
//   payload: 2,
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 3,
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
