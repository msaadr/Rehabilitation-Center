import React, { useRef } from "react";
import "./Service.css"; // Ensure your CSS is linked correctly
import image from "./assets/ser.jpg"; // Make sure the image path is correct
import food from "./assets/food.jpg";
import accomodation from "./assets/accomodation.jpg";
import doctor from "./assets/doctor.jpg";
import { Link } from "react-router-dom";
import Footer from './Footer'
function Service() {
  const contentRef = useRef(null);
  const handlescroll = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="image-container">
        <img src={image} alt="service" className="img2" />
        <div className="overlay">
          <div>
            <h2>Consultancy</h2>
            <p>
              Great things are done by series of small things brought together.
            </p>
            <button className="but" onClick={handlescroll}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="faciltiy">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Accomodation</h3>
            <img src={accomodation} className="card-img-top" alt="www" />
            <p className="card-text">
              We provide the best and clean room with the healthy enviroment to
              make sure the quick recovery.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Food</h3>
            <img src={food} className="card-img-top" alt="www" />
            <p className="card-text">
              We provide the healthy and top quality food, which is best for the
              victim's recovery.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Doctors</h3>
            <img src={doctor} className="card-img-top" alt="Doctors" />
            <p className="card-text">
              We have the best and highly qualified doctors specialized in this field.
            </p>
            <Link to="/doctor" className="btn btn-primary">
              See Doctors
            </Link>
          </div>
        </div>
      </div>
      <div ref={contentRef} className="services-container">
        <h1 className="services-title">Our Services</h1>
        <div className="main-serv-cont">
          <div className="service-item">
            <h2 className="service-heading">Real-Time Progress Tracking</h2>
            hr
            <p className="service-description">
              Stay connected with your loved one’s journey to recovery. Our
              platform provides real-time updates on daily routines, therapeutic
              milestones, and wellness activities, so you can feel close to their
              progress every step of the way.
            </p>
          </div>

          <div className="service-item">
            <h2 className="service-heading">Personalized Care Requests</h2>
            hr
            <p className="service-description">
              Every individual’s needs are unique, and we understand that families
              play a vital role in supporting them. Through our website, families
              can communicate special requests, dietary preferences, or any
              additional care items their loved one may need, ensuring
              personalized care at all times.
            </p>
          </div>

          <div className="service-item">
            <h2 className="service-heading">Interactive Family Portal</h2>
            hr
            <p className="service-description">
              Our interactive portal keeps families involved, offering features to
              schedule virtual visits, send encouraging messages, and view a
              calendar of activities. We believe that staying connected, even
              virtually, is essential for mental and emotional support.
            </p>
          </div>

          <div className="service-item">
            <h2 className="service-heading">Health and Wellness Updates</h2>
            hr
            <p className="service-description">
              Receive regular health reports, including updates from doctors,
              therapists, and nutritionists, directly through our platform. Our
              commitment is to ensure families are informed of their loved one’s
              well-being and progress in every area of their recovery.
            </p>
          </div>

          <div className="service-item">
            <h2 className="service-heading">Direct Communication Channels</h2>
            hr
            <p className="service-description">
              Whether you have a question, concern, or a special message for your
              loved one, our platform allows direct communication with the
              rehabilitation center team. Chat, email, or call us through the
              portal — we’re here to support both residents and families.
            </p>
          </div>

          <div className="service-item">
            <h2 className="service-heading">Family Guidance and Resources</h2>
            hr
            <p className="service-description">
              We offer a library of expert resources, including articles, videos,
              and live Q&A sessions, to help families understand the
              rehabilitation process, offer effective support, and be a part of
              their loved one’s journey to healing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
