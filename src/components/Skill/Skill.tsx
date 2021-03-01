import React, { Fragment } from 'react'
import { SkillType } from '../../type'

const Skill = (props: { skill: SkillType }) => {
  const { img_path, title, content } = props.skill
  return (
    <Fragment>
      <img src={img_path} alt={img_path} className="skill__img" />
      <div className="skill__details">
        <h4 className="heading-4 heading-4--light">{title}</h4>
        <p className="skill__sold">{content}</p>
      </div>
    </Fragment>
  )
}

export default Skill
