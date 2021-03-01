import React, { Component } from 'react'

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className="skill__list">
          <img
            src="img/realtor-1.jpeg"
            alt="realtor 1"
            className="skill__img"
          />
          <div className="skill__details">
            <h4 className="heading-4 heading-4--light">Eric Feinman</h4>
            <p className="skill__sold">245 house sold</p>
          </div>
          <img
            src="img/realtor-2.jpeg"
            alt="realtor 2"
            className="skill__img"
          />
          <div className="skill__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="skill__sold">212 house sold</p>
          </div>
          <img
            src="img/realtor-3.jpeg"
            alt="realtor 3"
            className="skill__img"
          />
          <div className="skill__details">
            <h4 className="heading-4 heading-4--light">Toby ramsey</h4>
            <p className="skill__sold">198 house sold</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skill
