//import React from 'react';
//import ReactDOM from 'react-dom';

import LikeButton from './like_button'

const e = React.createElement
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(
//     React.createElement(LikeButton), domContainer
// )


