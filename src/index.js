import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Store
import { createStore, applyMiddleware, compose } from "redux";
import myReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  myReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;


// const store = createStore(
//     myReducer,
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
