import React, { Component } from 'react'
import { SkillState, SkillType } from '../../type'
import Skill from './Skill'
import js from '../../img/skills/js.png'
import react from '../../img/skills/react.png'
import typescript from '../../img/skills/typescript.png'
import sass from '../../img/skills/sass.svg'
import vue from '../../img/skills/vue.png'

class SkillContainer extends Component<any, SkillState> {
  state = {
    skills: [
      {
        img_path: js,
        title: 'JavaScript',
        content: '2018 ~ present',
      },
      {
        img_path: react,
        title: 'React',
        content: '2020 ~ present',
      },
      {
        img_path: typescript,
        title: 'Typescript',
        content: '2020 ~ present',
      },
      {
        img_path: sass,
        title: 'Sass',
        content: '2019 ~ present',
      },
      {
        img_path: vue,
        title: 'Vue',
        content: '2018 ~ present',
      },
    ],
  }
  render() {
    const skills = this.state.skills.map((skill: SkillType, index: number) => (
      <Skill skill={skill} key={index} />
    ))
    return (
      <div className="skill">
        <h3 className="heading-3">使用過的技術</h3>
        <div className="skill__list">{skills}</div>
      </div>
    )
  }
}

export default SkillContainer
