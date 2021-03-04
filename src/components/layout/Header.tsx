import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h3 className="heading-2">歡迎您的到來</h3>
        <h1 className="heading-1">下方可以直接下載我的CV</h1>
        <button className="btn header__btn">點擊下載CV</button>
        <div className="header__person-text">個人連結</div>
        <div className="header__person-lists">
          <ul>
            <li>
              <a href="https://github.com/andy5566w">
                <b>Github</b>
              </a>
            </li>
            <li>
              <a href="https://andy5566w.medium.com/">
                <b>My Medium</b>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
