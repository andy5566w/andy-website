import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
      <section className="experiences">
        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-global"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">
            World's best luxury homes
          </h4>
          <p className="experience__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">Only the best properties</h4>
          <p className="experience__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>

        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">
            All homes in the top location
          </h4>
          <p className="experience__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>

        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">New home in one week</h4>
          <p className="experience__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">Top 1% realtors</h4>
          <p className="experience__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="experience">
          <svg className="experience__icon">
            <use href="img/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4 heading-4-dark">
            Secure payments on nexter
          </h4>
          <p className="experience__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
    )
  }
}

export default Experience
