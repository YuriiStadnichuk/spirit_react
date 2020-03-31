import React from "react";
import "./Services.css";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let servicesArr = [
      {
        img: "services_card-img web_img",
        title: "Web design",
        text:
          "Design a Pro Website in Minutes. Easy to Use, Design a Website Free! Market leaders. 24/7 support center. Easy drag n’ drop. SEO wizard. Easy-to-add blog. Advanced image editor. Free multilingual fonts. Customizable online store. 100s of templates. Mobile optimized.."
      },
      {
        img: "services_card-img mobile_img",
        title: "Mobile app",
        text:
          "A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such .."
      },
      {
        img: "services_card-img photo_img",
        title: "Photography",
        text:
          "Photography is the art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film."
      },
      {
        img: "services_card-img marketing_img",
        title: "Marketing",
        text:
          "Marketing is the study and management of exchange relationships. It is the business process of creating relationships with and satisfying customers. Because .."
      }
    ];
    return (
      <div className="white_cover" id="services">
        <div className="wrapper">
          <h2 className="title_dark">
            take a look at<span className="bold"> our services</span>
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
              Ipsum, "Lorem ipsum dolor sit amet..",comes from a line in section
              1.10.32.
            </p>
          </div>
          <div className="flex title_dark services_card-container">
            {servicesArr.map((elem, index) => {
              return (
                <div className="services_card text_center" key={index}>
                  <a href="/b">
                    <div className="card_border flex center_block">
                      <div className={elem.img}></div>
                    </div>
                    <div>
                      <div className="services_card-title">
                        <p className="bold text_uppercase">{elem.title}</p>
                      </div>
                      <p className="services_card-description center_block text_14">
                        {elem.text}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
