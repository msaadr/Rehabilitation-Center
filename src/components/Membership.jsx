import React from 'react'
import "./Membership.css";
import { Link } from "react-router-dom";

function Membership(){
    return (
      <>
        <div className="container">
          <div className="plan">
            <div className="inner">
              <div className="pricing">PKR8000/week</div> <br />
              <div className="title">Basic Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Check Up</div>
                </li>
                <li>
                  <div className="icon">Accomodation (7days)</div>
                </li>
                <li>
                  <div className="icon">Food</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
              </ul>
              <div className="action">
                <Link to="/week" className="button">
                  
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="plan2">
            <div className="inner">
              <div className="pricing">PKR90000/3mo</div> <br />
              <div className="title">Premium Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Check Up</div>
                </li>
                <li>
                  <div className="icon">Accomodation (90days)</div>
                </li>
                <li>
                  <div className="icon">Food</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
              </ul>
              <div className="action">
                <a href="#" className="button">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          <div className="plan3">
            <div className="inner">
              <div className="pricing">PKR1500000/6mo</div> <br />
              <div className="title">Exculsive Plan</div>
              <ul className="features">
                <li>
                  <div className="icon">Check Up</div>
                </li>
                <li>
                  <div className="icon">Accomodation (180days)</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
                <li>
                  <div className="icon">Lorem ipsum dolor sit.</div>
                </li>
              </ul>
              <div className="action">
                <a href="#" className="button">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Membership;