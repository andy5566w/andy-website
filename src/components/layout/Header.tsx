import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="img/logo.png" alt="logo" className="header__logo" />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src="img/logo-bbc.png" alt="bbc" />
          <img src="img/logo-forbes.png" alt="forbes" />
          <img src="img/logo-techcrunch.png" alt="techcrunch" />
          <img src="img/logo-bi.png" alt="bi" />
        </div>
      </header>
    )
  }
}

export default Header
