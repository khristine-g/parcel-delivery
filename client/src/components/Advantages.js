import React from "react";
import "../Advantages.css";

const Advantages = () => {
  return (
    <div className="advantages-page">
      <h1 style={{ color: "black" }}>Our Advantages</h1>

      <div className="advantages-card-container">
        {/* First Card */}
        <div className="advantages-card">
          <img
            src="https://www.vhv.rs/dpng/d/22-225259_icon-vector-globe-png-transparent-png.png "
            alt="team member"
          />
          <div className="advantages-card-content">
            <h2>Cargo Tracking</h2>
            <p>
              {" "}
              As a market leader in freight forwarding, we are providing
              tailored services…
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="advantages-card">
          <img
            src=" https://thumbs.dreamstime.com/b/icon-support-customer-service-call-center-vector-icons-help-phone-contact-business-line-symbol-communication-telephone-technology-140921458.jpg"
            alt="team 2"
          />
          <div className="advantages-card-content">
            <h2> Perfect Communication</h2>
            <p>
              {" "}
              We can provide you with a customized freight solution tailored to
              your needs…
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="advantages-card">
          <img
            src="https://atlas-content-cdn.pixelsquid.com/assets_v2/263/2630593195720840831/jpeg-600/G03.jpg?modifiedAt=1 "
            alt="hands around a light"
          />
          <div className="advantages-card-content">
            <h2> Reliability & Punctuality</h2>

            <p>
              {" "}
              Our freight company has a consultative, personalized approach to
              hiring…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
