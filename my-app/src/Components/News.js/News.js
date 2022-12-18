import React, { Component } from "react";
import "./News.css";
import ReactDOM from "react-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarCheck,
  faCalendarTimes,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import drjihad from "../../assets/avatar1.jfif";
import drbirhat from "../../assets/avatar2.jfif";
import drayad from "../../assets/avatar3.jfif";

const News = () => {
  return (
    <Carousel
    
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={false}
      interval={2000}
      className="col-lg-6 col-md-6  slider"
    >
      <div>
        <img className="" src={news1} />
        <div className="dr-bx1">
          <img className="drjihad" src={drjihad} />
          <p>
            Jihad Issa{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Can you get a diflucan prescription online?</h4>
      </div>
      <div>
        <img src={news2} />
        <div className="dr-bx2">
          <img className="drbirhat" src={drbirhat} />
          <p>
            Birhat Issa{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Can you get a diflucan prescription online?</h4>
      </div>
      <div>
        <img src={news3} />
        <div className="dr-bx3">
          <img className="drayad" src={drayad} />
          <p>
            Ayad Issa{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Can you get a diflucan prescription online?</h4>
      </div>
    </Carousel>
  );
};

export default News;
