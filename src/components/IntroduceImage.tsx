import React, { Component } from 'react'

class IntroduceImage extends Component {
  render() {
    return (
      <div className="introduce__pictures">
        <img
          src="img/story-1.jpeg"
          alt="img/story-1.jpeg"
          className="story__img--1"
        />
        <img
          src="img/story-2.jpeg"
          alt="img/story-2.jpeg"
          className="story__img--2"
        />
      </div>
    )
  }
}

export default IntroduceImage
