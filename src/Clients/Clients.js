import React from "react";
import "./Clients.css";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientsArr: [
        "client_card client_card_1",
        "client_card client_card_2",
        "client_card client_card_3",
        "client_card client_card_4",
        "client_card client_card_5"
      ]
    };
  }
  clickHandler = event => {
    let data = event.target.getAttribute("data");

    if (data === "1") {
      this.setState({
        clientsArr: [
          "client_card client_card_1",
          "client_card client_card_2",
          "client_card client_card_3"
        ]
      });
    } else if (data === "2") {
      this.setState({
        clientsArr: [
          "client_card client_card_1",
          "client_card client_card_2",
          "client_card client_card_3",
          "client_card client_card_4",
          "client_card client_card_5"
        ]
      });
    } else {
      this.setState({
        clientsArr: [
          "client_card client_card_4",
          "client_card client_card_5",
          "client_card client_card_1"
        ]
      });
    }
    return this.state.clientsArr;
  };
  render() {
    return (
      <div className="black_cover">
        <div className="wrapper">
          <h2>
            SOME OF<span className="bold"> OUR CLIENTS</span>
          </h2>
          <div className="title_line">
            <div className="yellow_line center_block"></div>
            <div className="yellow_line center_block"></div>
          </div>
          <div className="client_container text_center">
            <div className="client_container_card flex">
              {this.state.clientsArr.map((elem, index) => {
                return <div className={elem} key={index}></div>;
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
      </div>
    );
  }
}

export default Clients;
