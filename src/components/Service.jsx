import React from "react";
import "./Service.css"; // Ensure your CSS is linked correctly
import image from "./assets/ser.jpg"; // Make sure the image path is correct
import food from "./assets/food.jpg";
import accomodation from "./assets/accomodation.jpg";
import doctor from "./assets/doctor.jpg";

function Service() {
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
            <button className="but">Learn More</button>
          </div>
        </div>
      </div>
      <div className="faciltiy">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Accomodation</h3>
            <img src={accomodation
            } className="card-img-top" alt="www" />
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
              We provide the healthy and top quality food, which is best for the victim's recovery.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Doctors</h3>
            <img src={doctor} className="card-img-top" alt="www" />
            <p className="card-text">
              We have the best and highly qualified dcotors which is specialized in this field.
            </p>
            <a href="#" className="btn btn-primary">
              See Doctors
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
