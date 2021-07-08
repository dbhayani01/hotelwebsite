import React, { Component } from "react";
import "../css/home.css";
import hotel1 from "../images/1.jpg"
import img4 from "../images/4.jpg"
import img3 from "../images/3.jpg"
import img2 from "../images/2.jpg"

import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export default class Home extends Component {

  render() {
    return (

      <div>
        <div className="mb-5">
        </div>
        <img src={hotel1} width="1325" height="600" />
        <br></br>
        <br></br>
        <h2>  SERVICES </h2>
        <div class="row">
          <div class="column">
            <img src={img4} alt="Exclusive dining" width="335" />
            <div className="textunder">Exclusive Dining</div>
          </div>
          <div class="column">
            <img src={img3} alt="Luxury Rooms" width="400" />
            <div className="textunder">Luxury Rooms</div>
          </div>
          <div class="column">
            <img src={img2} alt="Travelling Activities" width="400" />
            <div className="textunder">Travelling Activities</div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h2>TESTIMONIALS</h2>
        <p style={{ fontSize: 23, color: "#000000", textAlign: "center", paddingTop: "18px" }}>
          This place is a little paradise, one of the best stays I have ever experienced.
          Beautiful view at the city and caring hosts who will make you feel like at home.
          <br></br>

          - Harpa Anderson

        </p>

      </div>
    );
  }
}