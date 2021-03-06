import React, { Component } from 'react'
import Header from './layout/Header'
import SkillContainer from './Skill/SkillContainer'
import Experiences from './Experience/Experiences'
import Portfolios from './Portfolio/Portfolios'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar"></div>

        <Header />

        <SkillContainer />

        <Experiences />

        <Portfolios />
      </div>
    )
  }
}

export default App
