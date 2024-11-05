import React from 'react'
import "./Membership.css";
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
                  <div className="icon"></div>Check Up
                </li>
                <li>
                  <div className="icon"></div>Accomodation (7days)
                </li>
                <li>
                  <div className="icon"></div>Food
                </li>
              </ul>
              <div className="action">
                <a href="#" className="button">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>

          <div className="plan2">
            <div className="inner">
              <div className="pricing">PKR90000/3mo</div> <br />
              <div className="title">Premium Plan</div>
              <ul className="features">
                <li>
                  <div className="icon"></div>Check Up
                </li>
                <li>
                  <div className="icon"></div>Accomodation (90days)
                </li>
                <li>
                  <div className="icon"></div>Food
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
                  <div className="icon"></div>Check Up
                </li>
                <li>
                  <div className="icon"></div>Accomodation (180days)
                </li>
                <li>
                  <div className="icon"></div>Food
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