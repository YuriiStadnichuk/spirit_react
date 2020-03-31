import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="footer" className="dark_cover">
        <div className="flex footer_container center_block padding_md">
          <div className="flex">
            <p className="text_uppercase light_grey">
              ALL RIGHTS RESERVED. COPYRIGHT © 2014
              <span className="hard_bold">SPIRIT8</span>
            </p>
          </div>
          <div className="contact_links flex">
            <a href="https://www.facebook.com/" className="flex_center">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/" className="flex_center">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" className="flex_center">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="https://www.instagram.com/" className="flex_center">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://web.telegram.org/" className="flex_center">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
