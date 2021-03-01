import React, { Component } from 'react'
import Header from './layout/Header'
import SkillContainer from './Skill/SkillContainer'
import Experiences from './Experience/Experiences'
import IntroduceImage from './IntroduceImage'
import IntroduceContent from './IntroduceContent'
import Portfolio from './Portfolio'
import Gallery from './Gallery'
import Footer from './layout/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <button className="nav-button"></button>
        </div>

        <Header />

        <SkillContainer />

        <Experiences />

        <IntroduceImage />

        <IntroduceContent />

        <Portfolio />

        <Gallery />

        <Footer />
      </div>
    )
  }
}

export default App
