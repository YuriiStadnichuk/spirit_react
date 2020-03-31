import React from "react";
import "./Work.css";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: (
        <div>
          <div className="work_card work_img_1">
            <a href="#/z">
              <div className="card_overlay text_14">
                <p className="text_uppercase text_20">Trend and fashion</p>
                <p className="light_grey">Website design</p>
                <div className="card_overlay_add"></div>
              </div>
            </a>
          </div>
        </div>
      ),
      card2: (
        <div>
          <div className="work_card work_img_2">
            <a href="#/h">
              <div className="card_overlay text_14">
                <p className="text_uppercase text_20">Trend and fashion</p>
                <p className="light_grey">Website design</p>
                <div className="card_overlay_add"></div>
              </div>
            </a>
          </div>
        </div>
      ),
      card3: (
        <div>
          <div className="work_card work_img_3">
            <a href="/s">
              <div className="card_overlay text_14">
                <p className="text_uppercase text_20">Trend and fashion</p>
                <p className="light_grey">Website design</p>
                <div className="card_overlay_add"></div>
              </div>
            </a>
          </div>
        </div>
      )
    };
  }

  render() {
    let filterArr = [
      {
        href: "#/1",
        direction: "All"
      },
      {
        href: "#/2",
        direction: "Web design"
      },
      {
        href: "#/3",
        direction: "Mobile design"
      },
      {
        href: "#/4",
        direction: "Photography"
      }
    ];

    return (
      <div className="white_cover" id="portfolio">
        <div className="wrapper">
          <h2 className="title_dark">
            take a look at<span className="bold"> our&nbsp;work</span>
          </h2>
          <div className="title_line">
            <div className="yellow_line center_block"></div>
            <div className="yellow_line center_block"></div>
          </div>
          <div>
            <p className="text_regular middle_grey text_center description_text">
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
          </div>

          <div className="portfolio_nav flex">
            <div className="filter">
              <p className="title_dark bold text_uppercase">Filter by type</p>
            </div>
            <div className="filter_container">
              <div className="filter_type flex">
                {filterArr.map((elem, index) => {
                  return (
                    <div key={index}>
                      <a className="middle_grey" href={elem.href}>
                        {elem.direction}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sorting_dropdown">
              <div className="dropdown_wrapper active">
                <div className="dropdown_selected">
                  <span className="dropdown_selected_label bold">All</span>
                  <span className="dropdown_icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="dropdown_list">
                  <div
                    data-item-id="web"
                    data-value="Web design"
                    className="dropdown_item"
                    data-type="sorting_items"
                  >
                    <span className="dropdown_label">Web design</span>
                  </div>

                  <div
                    data-item-id="mobile"
                    data-value="Mobile design"
                    className="dropdown_item selected"
                    data-type="sorting_items"
                  >
                    <span className="dropdown_label">Mobile design</span>
                  </div>

                  <div
                    data-item-id="photo"
                    data-value="Photography"
                    className="dropdown_item"
                    data-type="sorting_items"
                  >
                    <span className="dropdown_label">Photography</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex work_container">
              {this.state.card1}
              {this.state.card1}
              {this.state.card1}
              {this.state.card1}

              {this.state.card2}
              {this.state.card2}
              {this.state.card2}
              {this.state.card2}

              {this.state.card3}
              {this.state.card3}
              {this.state.card3}
              {this.state.card3}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
