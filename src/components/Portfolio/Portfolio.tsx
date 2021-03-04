import React from 'react'
import { PortfolioType } from '../../type'

const Portfolio = (props: PortfolioType) => {
  const { title_img, name, skills, demo_link } = props
  return (
    <div className="portfolio">
      <img src={title_img} alt="House 1" className="portfolio__img" />
      <h5 className="portfolio__name">{name}</h5>
      <div className="portfolio__skills">
        {skills.map((link, index) => (
          <img src={link} alt="js" key={index} />
        ))}
      </div>
      <a
        className="btn portfolio__btn"
        href={demo_link}
        target="_blank"
        rel="noreferrer"
      >
        點我看Demo
      </a>
    </div>
  )
}

export default Portfolio
