//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App.js';

import LikeButton from './like_button'

const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(
    React.createElement(LikeButton), domContainer
)


