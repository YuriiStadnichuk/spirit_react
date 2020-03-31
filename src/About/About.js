import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr1: {
        Mission: "We deliver uniqueness and quality",
        Skills: "Delivering fast and excellent results",
        Clients: "Satisfied clients thanks to our experience"
      }
    };
  }

  render() {
    return (
      <div className="white_cover">
        <div className="grad_container center_block middle_grey" id="about">
          <div className="flex grad_wrapper">
            <div className="about_us_mac">
              <div className="grad"></div>
            </div>
            <div className="about_us_info middle_grey">
              <div className="about_us_title text_uppercase">
                <p>about us</p>
                <h3 className="title_dark">
                  Some words <span className="bold">about us</span>
                </h3>
                <div className="border_container yellow_line"></div>
              </div>
              <div className="about_us_description">
                <p className="text_18">
                  We love building and rebuilding brands through our specific
                  skills. Using colour, fonts, and illustration, we brand
                  companies in a way they will never forget.
                </p>
              </div>
              <div className="about_us_list">
                <ul>
                  {Object.keys(this.state.arr1).map(keyName => (
                    <li key={keyName}>
                      <span className="bold text_18"> {keyName} - </span>
                      <span className="text_regular">
                        {this.state.arr1[keyName]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="button_browse flex">
                <a href="/portfolio">
                  <div className="button_browse_title flex">
                    <div className="bag"></div>
                    <p className="text_uppercase bold">Browse our work</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
