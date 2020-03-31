import React from "react";
import "./Testimonials.css";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="white_cover" id="portfolio">
        <div className="black_cover" id="testimonials">
          <div className="wrapper">
            <h2>
              <span className="bold">our clients’ </span>testimonials
            </h2>
            <div className="title_line">
              <div className="yellow_line center_block"></div>
              <div className="yellow_line center_block"></div>
            </div>
            <div className="text_center">
              <div className="testimonials_container  text_18">
                <p className="text_uppercase bold center_block">
                  his book is a treatise on the theory of ethics, very popular
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem
                  ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p className="light_grey">
                  <span className="bold">Dean Martin,</span>
                  <span className="text_light"> CEO Acme Inc.</span>
                </p>
              </div>
              <ul className="tablist flex center_block">
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
