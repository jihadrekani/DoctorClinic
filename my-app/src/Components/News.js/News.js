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
import OrthognathicSurgery from "../../assets/OrthognathicSurgery.jpg";
import ImplantSurgery from "../../assets/ImplantSurgery.jpg";

import news2 from "../../assets/news2.jpg";
import smile from "../../assets/smile.jpg";
import news4 from "../../assets/news4.jpg";
import GingivalAesthetics from "../../assets/GingivalAesthetics.jpg";
import drjihad from "../../assets/avatar2.jfif";
// import drbirhat from "../../assets/avatar2.jfif";
// import drayad from "../../assets/avatar3.jfif";
import drmarwan from "../../assets/drmarwan.jpg";
import drmustefa from "../../assets/drmustefa.jpg";
import drihsan from "../../assets/drihsan.jpg";
import dradrees from "../../assets/dradrees.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <Carousel
      className="col-xl-6 col-lg-6 col-md-6 slider"
      infiniteLoop={true}
      autoPlay={false}
      interval={2500}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >


<div className="items">
        <img className="rounded-lg" alt="item" src={news2} />
        <div className="dr-bx1">
          <img className="drmarwan" alt="" src={drmarwan} />
          <p>
            Dr Marwan{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              12-feb-2023
            </span>
          </p>
        </div>
        <h4>Surgeries</h4>
        <button className="newsbtn">
          <Link to="Surgeries" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>


      <div className="items">
        <img className="rounded-lg" alt="item" src={OrthognathicSurgery} />
        <div className="dr-bx1">
          <img className="drmarwan" alt="" src={drmarwan} />
          <p>
            Dr Marwan{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              12-feb-2023
            </span>
          </p>
        </div>
        <h4>Orthognathic Surgery</h4>
        <button className="newsbtn">
          <Link to="OrthognathicSurgery" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>

      <div className="items">
        <img className="rounded-lg " alt="item" src={ImplantSurgery} />
        <div className="dr-bx1">
          <img className="drjihad" about="alt" src={drjihad} />
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
        <h4>Implant Surgery</h4>
        <button className="newsbtn">
          <Link to="Implant" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>


      <div className="items">
        <img className="rounded-lg" alt="item" src={smile} />
        <div className="dr-bx1">
          <img className="drmustefa" alt="" src={drmustefa} />
          <p>
            Dr Mustefa{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Smile</h4>
        <button className="newsbtn">
          <Link to="smile" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>

      <div className="items">
        <img className="rounded-lg" alt="item" src={news4} />
        <div className="dr-bx1">
          <img className="drihsan" alt="" src={drihsan} />
          <p>
            Dr Ihsan{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Filler</h4>
        <button className="newsbtn">
          <Link to="filler" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>

      <div className="items">
        <img className="rounded-lg" alt="item" src={GingivalAesthetics} />
        <div className="dr-bx1">
          <img className="dradrees" alt="" src={dradrees} />
          <p>
            Dr Adrees{" "}
            <span>
              <FontAwesomeIcon
                icon={faCalendarWeek}
                className="envelope me-2"
              />{" "}
              8-feb-2023
            </span>
          </p>
        </div>
        <h4>Gingival Aesthetics</h4>
        <button className="newsbtn">
          <Link to="GingivalAesthetics" className="newslink">
            Read More{" "}
          </Link>
        </button>
      </div>
    </Carousel>
  );
};

export default News;
