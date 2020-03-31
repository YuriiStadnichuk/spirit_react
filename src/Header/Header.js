import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    return { date: props.date };
  }
  render() {
    return (
      <div className="start center_block padding_md">
        <header className="flex bold">
          <div className="logo">
            <p>Spirit8</p>
          </div>
          <div className="nav flex_align_end text_14">
            <div className="short_menu">
              <span>
                <i className="fa fa-fw fa-bars" aria-hidden="true"></i>
              </span>
            </div>

            <ul className="nav_links flex_align_end">
              {Object.keys(this.props.date).map((keyName, i) => (
                <li key={keyName}>
                  <a href={`/${keyName}`}>{this.props.date[keyName]}</a>
                  <div className="line flex">
                    <p className="grey_cover"></p>
                    <p className="yellow_cover"></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
