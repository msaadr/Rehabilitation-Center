import React from 'react'
import "./Home.css"
import image from "../home.jpg";
import image1 from "./assets/main1.jpg"
import image2 from "./assets/main2.jpg"
function Home(){
    return (
      <>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image} className="img" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image1} className="img1" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image2} className="img2" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="contact-box-container">
      {/* Phone Section */}
      <div className="contact-box">
        <div className="contact-icon">
          <a href="tel:+92%2042%2035177791-2">
            <i className="fas fa-mobile-alt" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">
            <a href="tel:+92%2042%2035177791-2">Give us a Call</a>
          </h3>
          <p className="contact-description">
            <a href="tel:+92 334 5177790" className="contact-link">
              +92 3707885899
            </a>
          </p>
        </div>
      </div>

      {/* Email Section */}
      <div className="contact-box">
        <div className="contact-icon">
          <a href="mailto:info@hope.org.pk">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">
            <a href="mailto:info@hope.org.pk">Send us an Email</a>
          </h3>
          <p className="contact-description">
            <a href="mailto:info@hope.org.pk" className="contact-link">
              rehab@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
      </>
    );

}
export default Home;