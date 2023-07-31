import React from 'react';
import '../Services.css'

const Services = () => {
  return (
    <div className='full-page'>
        <h6>What we do</h6>
      <h1 style={{color: "#ccc"}}> Our Services</h1>
      <div className="card-container">
        {/* First Card */}
        <div className="card">
          <img src=" https://media.licdn.com/dms/image/D4D12AQGb0in3IjKRuQ/article-cover_image-shrink_720_1280/0/1685118761581?e=2147483647&v=beta&t=8qMHyyIUUHcW01czQnHRn0L7vmGq28Z96tUcTTtTa8U" alt="Service 1" />
          <div className="card-content">
            <h2>Air Transport</h2>
            <p> Our service is founded on the commitment, dedication and professionalism, and we keep to all standards of quality.</p>
            <button>Learn More</button>
          </div>
        </div>

        {/* Second Card */}
        <div className="card">
          <img src=" https://uploads-ssl.webflow.com/5f35804c054b0997935b2488/5f35804c054b0958af5b2cc4_container-ship-tugboat-700x371.jpg" alt="Service 2" />
          <div className="card-content">
            <h2> Ocean Transport</h2>
            <p>Our service is founded on the commitment, dedication and professionalism, and we keep to all standards of quality..</p>
            <button>Learn More</button>
          </div>
        </div>

        {/* Third Card */}
        <div className="card">
          <img src="https://www.freightwaves.com/wp-content/uploads/2019/07/CN-railroad.jpg " alt="Service 3" />
          <div className="card-content">
            <h2>Train Transport</h2>
            <p>Our service is founded on the commitment, dedication and professionalism, and we keep to all standards of quality.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
