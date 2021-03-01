import React, { Component } from 'react'
import js from '../../img/header/js.png'
import react from '../../img/header/react.png'
import typescript from '../../img/header/typescript.png'
import sass from '../../img/header/sass.svg'
import vue from '../../img/header/vue.png'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h3 className="heading-2">歡迎您的到來</h3>
        <h1 className="heading-1">下方可以直接下載我的CV</h1>
        <button className="btn header__btn">點擊下載CV</button>
        <div className="header__seenon-text">使用過的技術</div>
        <div className="header__seenon-logos">
          <img src={js} alt="js icon" />
          <img src={typescript} alt="ty icon" />
          <img src={react} alt="react icon" />
          <img src={vue} alt="vue icon" />
          <img src={sass} alt="sass icon" />
        </div>
      </header>
    )
  }
}

export default Header
