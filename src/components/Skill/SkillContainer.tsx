import React, { Component } from 'react'
import { SkillState, SkillType } from '../../type'
import Skill from './Skill'
import js from '../../img/header/js.png'
import react from '../../img/header/react.png'
import typescript from '../../img/header/typescript.png'
import sass from '../../img/header/sass.svg'
import vue from '../../img/header/vue.png'

class SkillContainer extends Component<any, SkillState> {
  state = {
    skills: [
      {
        img_path: js,
        title: 'JavaScript',
        content: '2017 ~ now',
      },
      {
        img_path: react,
        title: 'React',
        content: '2020 ~ now',
      },
      {
        img_path: typescript,
        title: 'Eric Feinman',
        content: '2020 ~ now',
      },
      {
        img_path: sass,
        title: 'Sass',
        content: '2017 ~ now',
      },
      {
        img_path: vue,
        title: 'Vue',
        content: '2017 ~ now',
      },
    ],
  }
  render() {
    const skills = this.state.skills.map((skill: SkillType, index: number) => (
      <Skill skill={skill} key={index} />
    ))
    return (
      <div className="skill">
        <h3 className="heading-3">技術熟練度</h3>
        <div className="skill__list">{skills}</div>
      </div>
    )
  }
}

export default SkillContainer
