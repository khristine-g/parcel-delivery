import React from "react";
import "../Home.css";
import About from "./About";
import Services from "./Services";
import Tracking from "./Tracking";
import Shipping from "./Shipping";
import Parcel from "./Parcel";
import Footer from "./footer/footer";
import Advantages from "./Advantages";
import Quote from "./Quote";

function Home() {
  return (
    <div className="landing-page-container">
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="8s"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img
              src=" https://corlettexpress.com/storage/2019/12/What-are-the-advantages-of-road-transport-2048x1024.webp"
              alt="Chania"
            />

            <div className="carousel-caption">
              <h3>Train Transportation</h3>
              {/* <p> TransLogic offers a menu of supply chain solutions that can optimize the effectiveness of your product<br></br> promotion and reduce the cost of packaging</p> */}
            </div>
          </div>

          <div className="item">
            <img
              src=" https://www.itaerea.com/wp-content/uploads//air-transport-1.jpg"
              alt="Chicago"
            />
            <div className="carousel-caption">
              <h3>Air Transportation</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>

          <div className="item">
            <img
              src="https://unctad.org/sites/default/files/2021-07/High-seas-1200x675.jpg"
              alt="New York"
            />
            <div className="carousel-caption   d-md-block">
              <h3>Ocean Transportation</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        {/* Left and right controls */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
      <Shipping />
      <Services />
      <Tracking />
      <Advantages />
      <About />

      <Footer />
    </div>
  );
}

export default Home;
