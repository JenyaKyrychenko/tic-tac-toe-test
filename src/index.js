import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import GameWrapper from "./GameWrapper";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <GameWrapper />
    </Provider>,
  document.getElementById('root')
);

