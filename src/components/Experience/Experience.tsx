import React from 'react'
import { ExperienceType } from '../../type'

const Experience = (props: { experience: ExperienceType }) => {
  const { icon_path, title, content } = props.experience
  return (
    <div className="experience">
      <span className={`${icon_path} experience__icon`} />
      <h4 className="heading-4 heading-4-dark">{title}</h4>
      <ol className="experience__text">
        {content.map((content, index) => {
          if (index === 0)
            return (
              <div key={index} className="experience__text--title heading-3">
                {content}
              </div>
            )
          return <li key={index}>{content}</li>
        })}
      </ol>
    </div>
  )
}

export default Experience
