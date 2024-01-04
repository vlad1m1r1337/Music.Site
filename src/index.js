import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const trackState = {
    trackIdState: -1,
}

const reducer = (state = trackState, action) => {
    switch (action.type) {
        case "NEXT_TRACK":
            if (state.trackIdState + 1 === undefined) {return state}
            return {...state, trackIdState: state.trackIdState + 1}
        case "PREV_TRACK":
            if (state.trackIdState - 1 === undefined) {return state}
            return {...state, trackIdState: state.trackIdState - 1}
        default:
            return state
    }
}

const store = createStore(reducer);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
