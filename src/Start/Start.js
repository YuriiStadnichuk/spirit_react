import React from "react";
import "./Start.css";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="black_cover">
        <div className="start center_block padding_md" id="home">
          <div className="well_come text_center grey">
            <h2>
              WELCOME on <span className="yellow bold">spirit8</span>
            </h2>
            <p className="text_20">
              We are a digital agency with{" "}
              <span className="bold light_grey">years of experience</span> and
              with <span className="bold light_grey">extraordinary people</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
