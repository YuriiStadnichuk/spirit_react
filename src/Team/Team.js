import React from "react";
import "./Team.css";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "#d7d7d7" };
  }

  clickHandler = event => {
    let data = event.target.getAttribute("data");

    if (data === "1") {
      this.setState({ color: "#e69d40" });
    } else if (data === "2") {
      this.setState({ color: "#d7d7d7" });
    } else {
      this.setState({ color: "#b54b00" });
    }
    return this.state.color;
  };

  render() {
    let arrPerson = [
      {
        name: "Jason Statham",
        nic: "Knife designer",
        phrases: "It’s never too late to be what you might have been "
      },
      {
        name: "Van Damme",
        nic: "No English",
        phrases:
          "Stretching his hand out to catch the stars, he forgets the flowers at his feet"
      },
      {
        name: "Sylvester Stallone",
        nic: "Cigar Lover",
        phrases: "Life is what happens while you’re busy making other plans"
      },
      {
        name: "Jet Li",
        nic: "I need more money",
        phrases:
          "Life is a succession of lessons which must be lived to be understood"
      }
    ];
    return (
      <div className="wrapper">
        <h2>
          Meet <span className="bold">our team</span>
        </h2>
        <div className="title_line">
          <div className="yellow_line center_block"></div>
          <div className="yellow_line center_block"></div>
        </div>
        <div className="team_container text_center">
          <div className="team_container_card flex">
            {arrPerson.map((elem, index) => {
              return (
                <div className="team_card" key={index}>
                  <div
                    className="team_card_img center_block"
                    style={{ backgroundColor: this.state.color }}
                  ></div>
                  <div>
                    <div className="team_card_info_title">
                      <p className="bold text_20">{elem.name}</p>
                      <p>{elem.nic}</p>
                    </div>
                    <p className="team_card_info_description center_block text_14">
                      {elem.phrases}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <ul className="tablist flex center_block">
            <li>
              <button onClick={this.clickHandler} data="1">
                1
              </button>
            </li>
            <li>
              <button onClick={this.clickHandler} data="2">
                2
              </button>
            </li>
            <li>
              <button onClick={this.clickHandler} data="3">
                3
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Team;
