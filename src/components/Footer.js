import React from "react";

const Footer = () => {
  return (
    <div className="w-full float-left weight-footer-con position-relative bg-[#343C55] text-[#b7bac5]">
      <div className="container">
        <div
          className="weight-footer-content text-center wow fadeInUp"
          // style={{visibility: visible; animation-name: fadeInUp;}}
        >
          <figure>
            <img
              src="assets/image/footer-logo.png"
              alt="footer-logo"
              className="img-fluid"
            />
          </figure>
          <div className="footer-navbar">
            <ul>
              <li className="d-inline-block border-left-0 pl-0">
                <a href="#" cursorshover="true">
                  Home
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" cursorshover="true">
                  About
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" cursorshover="true">
                  Services
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" cursorshover="true">
                  Portfolio
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" cursorshover="true">
                  Blog
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" cursorshover="true">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social-icon">
            <ul className="mb-0">
              <li className="inline-block">
                <a href="https://www.behance.net/" className="cursor-pointer">a
                  <i className="fab fa-behance flex items-center justify-center cursor-pointer"></i>
                </a>
              </li>
              <li className="inline-block">
                <a href="https://www.behance.net/" className="cursor-pointer">b
                  <i className="fab fa-behance flex items-center justify-center cursor-pointer"></i>
                </a>
              </li>
              <li className="inline-block">
                <a href="https://www.behance.net/" className="cursor-pointer">c
                  <i className="fab fa-behance flex items-center justify-center cursor-pointer"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
