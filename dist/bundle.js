(function () {
  'use strict';

  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        liked: false
      };
    }

    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return /*#__PURE__*/React.createElement("button", {
        onClick: () => this.setState({
          liked: true
        })
      }, "Like");
    }

  } // const domContainer = document.querySelector('#like_button_container');
  // // ReactDOM.render(e(LikeButton), domContainer);
  // ReactDOM.render(
  //     React.createElement(LikeButton), domContainer
  // )

  //import React from 'react';
  const e = React.createElement;
  const domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(e(LikeButton), domContainer); // ReactDOM.render(
  //     React.createElement(LikeButton), domContainer
  // )

}());
