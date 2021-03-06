import React, { Component } from 'react'
import Portfolio from './Portfolio'
import { PortfolioState } from '../../type'

import js from '../../img/skills/js.png'
import html from '../../img/skills/html5.png'
import react from '../../img/skills/react.png'
import typescript from '../../img/skills/typescript.png'
import sass from '../../img/skills/sass.svg'
import vue from '../../img/skills/vue.png'
import carnival from '../../img/portfolio/carousel1.png'
import carousle from '../../img/portfolio/carousel.png'
import yt from '../../img/portfolio/yt.png'
import typhoon from '../../img/portfolio/typhoon.png'
import cherry from '../../img/portfolio/cherry.png'
class Portfolios extends Component<any, PortfolioState> {
  state = {
    portfolios: [
      {
        title_img: carnival,
        name: '台灣園遊會',
        skills: [js, html, vue, sass],
        demo_link: 'https://carnival-web-andy5566w.vercel.app',
      },
      {
        title_img: typhoon,
        name: '颱風預報',
        skills: [js, html, vue, sass],
        demo_link: 'https://wfc-wds-frontend.larvata.tw/',
      },
      {
        title_img: yt,
        name: '模擬youtube',
        skills: [js, html, react, typescript, sass],
        demo_link: 'https://pedantic-swanson-4470cc.netlify.app/',
      },
      {
        title_img: carousle,
        name: '輪播插件',
        skills: [js, html, typescript, sass],
        demo_link: 'https://carnival-web-andy5566w.vercel.app',
      },
      {
        title_img: cherry,
        name: '3D櫻桃',
        skills: [html, sass],
        demo_link: 'https://andy5566w.github.io/3D-Card/',
      },
    ],
  }
  render() {
    const portfolio = this.state.portfolios.map(
      ({ title_img, name, skills, demo_link }, index) => (
        <Portfolio
          key={index}
          demo_link={demo_link}
          name={name}
          skills={skills}
          title_img={title_img}
        />
      )
    )
    return <section className="portfolios">{portfolio}</section>
  }
}

export default Portfolios
