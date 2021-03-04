import React, { Component } from 'react'
import Header from './layout/Header'
import SkillContainer from './Skill/SkillContainer'
import Experiences from './Experience/Experiences'
import IntroduceImage from './IntroduceImage'
import IntroduceContent from './IntroduceContent'
import Portfolios from './Portfolio/Portfolios'
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

        {/*<IntroduceImage />*/}

        {/*<IntroduceContent />*/}

        <Portfolios />

        <Gallery />

        <Footer />
      </div>
    )
  }
}

export default App
