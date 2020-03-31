import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="white_cover" id="portfolio">
        <div className="white_cover">
          <div className="wrapper">
            <h2 className="title_dark">
              feel free to<span className="bold"> contact us</span>
            </h2>
            <div className="title_line">
              <div className="yellow_line center_block"></div>
              <div className="yellow_line center_block"></div>
            </div>
            <div className="contact_contanier center_block">
              <p className="text_regular middle_grey text_center description_text">
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance.
              </p>
              <form action="#" method="post">
                <div className="user_date flex">
                  <div>
                    <label className="middle_grey">
                      Name <span className="text_14">*</span>
                      <br />
                      <input
                        className="title_dark"
                        type="text"
                        name="name"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="middle_grey">
                      Email address <span className="text_14">*</span>
                      <br />
                      <input
                        className="title_dark"
                        type="email"
                        name="email"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="user_message">
                  <label className="middle_grey">
                    Message <span className="text_14">*</span>
                    <br />
                    <input type="text" name="message" />
                  </label>
                </div>
                <div className="flex_end">
                  <button type="submit" className="yellow_cover text_uppercase">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
