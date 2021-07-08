import React from "react";
import "../css/contact.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mt-5 con"> LET'S CONNECT </h3>
        <br></br>
        <br></br>
        <div class="row">
          <div class="column">
            <h4 className="hours">
              Hours ​Weekdays / 7:00 – 18:00 Saturdays, Sundays / 9:00 – 15:00{" "}
            </h4>
          </div>
          <div class="column">
            <h4 className="Corporate offices ">
              Corporate offices: <br></br>
              2700 Marigold Lane, Juhu, Mumbai{" "}
            </h4>
          </div>
          <div class="column">
            <h4 className=" contact info ">
              Contact Info: Phone:+12137764443<br></br>
              Email:office@allureorchid .com<br></br>
              Whatsapp number:+14155238886<br></br>
              Facebook page: https://www.facebook
              .com/Hotel-Allure-Orchid-103391985283877​
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
