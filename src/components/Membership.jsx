import React from 'react'
import "./Membership.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Membership(){
    return (
      <>
        <div className="containerr">
          <div className="plan">
            <div className="inner">
              <div className="pricing">PKR 8,000/week</div> <br />
              <div className="title">Basic Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Accomodation (7days)</div>
                </li>
                <li>
                  <div className="icon">Meal</div>
                </li>
              </ul>
            </div>
            <div className="action">
              <Link to="/register" className="button">
                Choose Plan
              </Link>
            </div>
          </div>

          <div className="plan2">
            <div className="inner">
              <div className="pricing">PKR 90,000/3mo</div> <br />
              <div className="title">Premium Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Accomodation (90days)</div>
                </li>
                <li>
                  <div className="icon">Meal</div>
                </li>

                <li>
                  <div className="icon">Weekly Checkup.</div>
                </li>
              </ul>
            </div>
            <div className="action">
              <Link to="/register" className="button">
                Choose Plan
              </Link>
            </div>
          </div>
          <div className="plan3">
            <div className="inner">
              <div className="pricing">PKR 1,500,000/6mo</div> <br />
              <div className="title">Exculsive Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Accomodation (180days)</div>
                </li>
                <li>
                  <div className="icon">Meal.</div>
                </li>
                <li>
                  <div className="icon">Daily Checkup.</div>
                </li>
                <li>
                  <div className="icon">Presonal Consultantation.</div>
                </li>
              </ul>
            </div>
            <div className="action">
              <Link to="/register" className="button">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
export default Membership;