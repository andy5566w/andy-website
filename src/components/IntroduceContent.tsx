import React, { Component } from 'react'

class IntroduceContent extends Component {
  render() {
    return (
      <div className="introduce__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&ldquo;
        </h2>
        <p className="introduce__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>
    )
  }
}

export default IntroduceContent
