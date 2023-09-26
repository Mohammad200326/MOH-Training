import React from 'react';
import '../ticketsBoorstrap.css';
import Img1 from "../images/Frame 2444.png";
import Img2 from "../images/notification.svg";
import Img3 from "../images/messages-2.svg";
import Search from "../images/search-normal.svg";

function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center px-3 bg-white">
      {
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
          <div
            className="head d-flex justify-content-between align-items-center"
            style={{ gap: 158 + "px" }}
          >
            <a
              href="#"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <g clip-path="url(#clip0_30_2366)">
                  <path
                    d="M0 0H80V80H0V0ZM18.7469 27.7312C18.7531 29.3937 18.75 31.0594 18.75 32.725C25.8406 36.7656 32.9094 40.8406 40 44.875C44.2719 42.4094 48.5438 39.9406 52.8094 37.4659C52.825 40.7316 52.7903 43.9941 52.8284 47.2597C48.5812 49.7878 44.2628 52.1938 40 54.6972C35.7281 52.2128 31.4344 49.7597 27.1531 47.2909C24.3219 48.8909 21.5 50.5031 18.675 52.1128C25.7562 56.2472 32.8969 60.2819 40 64.3816C47.0844 60.3159 54.1875 56.2881 61.2591 52.1975C61.2438 44.0381 61.2469 35.8787 61.2559 27.7194C54.1809 23.635 47.0872 19.5788 40.0031 15.51C32.9138 19.577 25.8284 23.6507 18.7469 27.7312Z"
                    fill="#1D9BF0"
                  />
                  <path
                    d="M31.3344 30.1812C34.2312 28.5375 37.1094 26.8562 40 25.2C42.9065 26.8593 45.8031 28.5375 48.7125 30.1906C45.8031 31.8531 42.9031 33.5218 40 35.1875C37.1156 33.5125 34.2094 31.8687 31.3344 30.1812Z"
                    fill="#1D9BF0"
                  />
                  <path
                    d="M18.7469 27.7313C25.8312 23.65 32.9156 19.575 40.0034 15.5094C47.0875 19.5781 54.1816 23.6344 61.2562 27.7188C61.2472 35.8781 61.2441 44.0375 61.2594 52.1969C54.1875 56.2875 47.0844 60.3157 40 64.3813C32.8969 60.2816 25.7562 56.2472 18.675 52.1125C21.5 50.5031 24.3219 48.8906 27.1531 47.2906C31.4344 49.7594 35.7281 52.2125 40 54.6969C44.2628 52.1935 48.5812 49.7875 52.8284 47.2594C52.7906 43.9938 52.825 40.731 52.8094 37.4656C48.5437 39.9406 44.2719 42.4094 40 44.8747C32.9094 40.8403 25.8406 36.7653 18.75 32.7247C18.75 31.0594 18.7531 29.3938 18.7469 27.7313ZM31.3344 30.1813C34.2094 31.8688 37.1156 33.5125 40 35.1875C42.9031 33.5219 45.8031 31.8531 48.7125 30.1906C45.8031 28.5375 42.9066 26.8594 40 25.2C37.1094 26.8563 34.2312 28.5375 31.3344 30.1813Z"
                    fill="#0F1419"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_2366">
                    <rect width="80" height="80" rx="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div
              className="id d-flex justify-content-between align-items-center"
              style={{ gap: 8 + "px" }}
            >
              <div class="image">
                <img
                  src={Img1}
                  alt="mdo"
                  width="50"
                  height="60"
                  className="rounded"
                />
              </div>
              <div className="text fw-normal">
                <span
                  style={{
                    color: "#1d9bf0",
                    display: "block",
                    textAlign: "right",
                  }}
                >
                  مرحبا, معاذ
                  <br />
                </span>
                <span style={{ color: "#4e5356" }}>لديك 15 تذكرة جديدة</span>
              </div>
            </div>
          </div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="input-group searchDiv position-relative w-100">
              <button className="btn btn-link searchButton position-absolute top-0 end-0">
                <img src={Search} alt="" />
              </button>
              <input
                type="text"
                className="form-control searchInput rounded"
                placeholder="بحث"
              />
            </div>
          </form>
          <div
            className="icons d-flex justify-content-between align-items-center"
            style={{"padding-left": 60 + "px"}}
          >
            <button
              type="button"
              className="btn btn-secondary m-3 p-2 position-relative"
            >
              <img src={Img2} alt="" />
              <span className="badge rounded-circle bg-danger position-absolute d-flex justify-content-center align-items-center">
                1
              </span>
            </button>
            <button
              type="button"
              className="btn btn-secondary m-2 p-2 position-relative"
            >
              <img src={Img3} alt="" />
              <span className="badge rounded-circle bg-danger position-absolute d-flex justify-content-center align-items-center">
                1
              </span>
            </button>
          </div>
        </div>
      }
    </header>
  );
}

export default Header;