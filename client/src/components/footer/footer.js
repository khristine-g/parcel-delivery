import react from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="footer-col" id="details">
          <h1>Translogic</h1>
          <p>
            Embark on a journey that transcends conventional boundaries. Our app
            is more than just a tool; it's your gateway to a connected ecosystem
            of suppliers, shippers, carriers, and receivers, all working in
            harmony to ensure your cargo reaches its destination with precision
            and punctuality. Gone are the days of navigating through convoluted
            processes and communication gaps. With our app, you're in control,
            armed with real-time insights and data-driven decision-making tools.
          </p>
        </div>

        <div className="footer-col">
          <h1>Quick link</h1>
          <ul id="links">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>policy</li>
            <li>admin</li>
          </ul>
        </div>
        <div className="footer-col"></div>
      </div>
      <div id="social-links">
        <div>
          <p>SendIT © 2023. All rights reserved.</p>
        </div>
        <div id="icons">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="twitter"
              height="30"
              width="30"
            >
              <path
                fill="#03A9F4"
                d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="instagram"
              height="30"
              width="30"
            >
              <linearGradient
                id="a"
                x1="1.464"
                x2="14.536"
                y1="14.536"
                y2="1.464"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <path
                fill="url(#a)"
                d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
              ></path>
              <linearGradient
                id="b"
                x1="5.172"
                x2="10.828"
                y1="10.828"
                y2="5.172"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <path
                fill="url(#b)"
                d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
              ></path>
              <linearGradient
                id="c"
                x1="11.923"
                x2="12.677"
                y1="4.077"
                y2="3.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="126.445 2.281 589 589"
              id="facebook"
              height="30"
              width="30"
            >
              <circle
                cx="420.945"
                cy="296.781"
                r="294.5"
                fill="#3c5a9a"
              ></circle>
              <path
                fill="#fff"
                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
