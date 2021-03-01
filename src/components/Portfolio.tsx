import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolios">
        <div className="portfolio">
          <img
            src="img/house-1.jpeg"
            alt="House 1"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Beautiful Familiy House</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>USA</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>

        <div className="portfolio">
          <img
            src="img/house-2.jpeg"
            alt="House 2"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Modern Glass Villa</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Canada</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              450 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$2,750,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>

        <div className="portfolio">
          <img
            src="img/house-3.jpeg"
            alt="House 3"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Cozy Country House</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>UK</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>4 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              250 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$850,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>

        <div className="portfolio">
          <img
            src="img/house-4.jpeg"
            alt="House 4"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Large Rustical Villa</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Portugal</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              480 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,950,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>

        <div className="portfolio">
          <img
            src="img/house-5.jpeg"
            alt="House 5"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Majestic Palace House</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Germany</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>18 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              4230 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$9,500,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>

        <div className="portfolio">
          <img
            src="img/house-6.jpeg"
            alt="House 6"
            className="portfolio__img"
          />
          <svg className="portfolio__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="portfolio__name">Modern Familiy Apartment</h5>
          <div className="portfolio__location">
            <svg>
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Italy</p>
          </div>
          <div className="portfolio__rooms">
            <svg>
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>3 rooms</p>
          </div>
          <div className="portfolio__area">
            <svg>
              <use href="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              180 m<sup>2</sup>
            </p>
          </div>
          <div className="portfolio__price">
            <svg>
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$600,000</p>
          </div>
          <button className="btn portfolio__btn">Contact realtor</button>
        </div>
      </section>
    )
  }
}

export default Portfolio
