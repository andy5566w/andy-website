import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h3 className="heading-2">歡迎您的到來</h3>
        <h1 className="heading-1">下方可以直接下載我的CV</h1>
        <a href="./resume/andy-tsai.pdf" className="btn header__btn" download>
          點擊下載CV
        </a>
        <div className="header__person-text">個人連結</div>
        <div className="header__person-lists">
          <ul>
            <li>
              <a
                href="https://github.com/andy5566w"
                rel="noreferrer"
                target={'_blank'}
              >
                <b>Github</b>
              </a>
            </li>
            <li>
              <a
                href="https://andy5566w.medium.com/"
                rel="noreferrer"
                target={'_blank'}
              >
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
