import React from "react";
import "./documentation.css";
import "./components.css";
import { Link } from "react-scroll";
import {
  BrowseRouter as Router,
  Routes,
  Route,
  Link as Linkr
} from "react-router-dom";

export default function Documentation() {
  return (
    <div className="documentation-layout">
      <div className="nav-section">
        <div className="navigation-btn">
          <Linkr className="home-route" to="/">
            <h2>
              ROCKET-UI <i className="fas fa-rocket brand-logo"></i>
            </h2>
          </Linkr>
          <Link
            to="navbar"
            spy={true}
            smooth={true}
            className="button-nav nav-btn navbar-btn"
          >
            NavBar
          </Link>
          <Link
            to="card"
            spy={true}
            smooth={true}
            className="button-nav nav-btn card-btn"
          >
            Cards{" "}
          </Link>
          <Link
            to="button"
            spy={true}
            smooth={true}
            className="button-nav nav-btn buttons-btn"
          >
            Buttons
          </Link>
          <Link
            to="floating-btn"
            spy={true}
            smooth={true}
            className="button-nav nav-btn floating-button"
          >
            Floating Buttons
          </Link>
          <Link
            to="alerts"
            spy={true}
            smooth={true}
            className="button-nav nav-btn alerts"
          >
            Alerts
          </Link>
          <Link
            to="badge-card"
            spy={true}
            smooth={true}
            className="button-nav nav-btn card-badge-btn"
          >
            Badge on Card
          </Link>
          <Link
            to="avatar"
            spy={true}
            smooth={true}
            className="button-nav nav-btn avatar-btn"
          >
            {" "}
            Avatar
          </Link>
        </div>
      </div>
      <div className="doc">
        <h2>INSTALLATION</h2>
        <p>
          Copy the following code in the head tag of your HTML document and you
          are good to go:
        </p>

        <div style={{ padding: "0rem" }} className="codeBox">
          <iframe
            src="https://carbon.now.sh/embed/F2ZngG8Kjrcwphl2TAHL"
            style={{
              width: "44rem",
              // height: "129px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <p>
          The icons used in this library are from Font Awesome. You can get your
          own CDN link here
        </p>
        <hr />
        <div className="component-details" id="navbar">
          <h2>Nav Bars</h2>
          <nav style={{ marginBottom: "2rem" }} className="navbar">
            <div className="navBrand">
              Rocket<sup>UI</sup>
            </div>
            <ul className="navbar-items">
              <li>
                <a href="#" className="navItem">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Electronics
                </a>
              </li>
              <li>
                <input className="main-search" placeholder="Search" />
              </li>
            </ul>
          </nav>

          <nav style={{ marginBottom: "2rem" }} className="navbar dark">
            <div className="navBrand">
              Rocket<sup>UI</sup>
            </div>
            <ul className="navbar-items">
              <li>
                <a href="#" className="navItem">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="navItem">
                  Electronics
                </a>
              </li>
              <li>
                <input className="main-search" placeholder="Search" />
              </li>
            </ul>
          </nav>

          <iframe
            src="https://carbon.now.sh/embed/FsVjs21x4xlCKbhYuIPF"
            style={{
              width: "40rem",
              height: "40rem",
              border: "0",
              transform: "scale(1)"
              // overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <hr />
        <div className="component-details" id="card">
          <h2>Cards</h2>
          <div className="row">
            <div class="card-modern">
              <div class="card-modern-body">
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  class="card-modern-image"
                />
                <p class="card-modern-text">10% Off!</p>
              </div>
            </div>
            <div class="card-modern card-light">
              <div class="card-modern-body">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  class="card-light-image"
                />
              </div>
            </div>

            <div class="card-modern">
              <div class="card-modern-body">
                <img
                  src="https://i.pinimg.com/564x/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg"
                  class="card-modern-image"
                />
                <a href="#" class="card-movie-text">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <iframe
            src="https://carbon.now.sh/embed/2trSeZ4mbrFb54ts6mCn"
            style={{
              marginTop: "2rem",
              width: "50rem",
              height: "45rem",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>

          <div className="row">
            <div class="card card-ecom">
              <div class="card-header">
                <img
                  src="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
                  class="card-ecom-image"
                />
              </div>
              <div class="card-body">
                <p class="item-name">iPhone XR</p>
                <p class="item-price">Rs. 37,899</p>
                <p class="item-rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon> (5000+ Ratings)
                </p>
                <a href="#" class="cartButton btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>

            <div class="flipcard">
              <div class="flipcard-front">
                <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80" />
              </div>
              <div class="flipcard-back">
                <h2>
                  <span>Order Now!</span>
                </h2>
              </div>
            </div>
          </div>

          <iframe
            src="https://carbon.now.sh/embed/Dz0sraYIEJp2cRaT54uz"
            style={{
              margin: "2rem",
              width: "45rem",
              height: "40rem",
              border: "0",
              transform: "scale(1)"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        <hr />
        <div className="component-details" id="button">
          <h2>Buttons</h2>
          <div>
            <a href="#" className="btn btn-primary">
              Primary
            </a>
            <a href="#" className="btn btn-danger">
              Danger
            </a>
            <a href="#" className="btn btn-warning">
              Warning
            </a>
            <a href="#" className="btn btn-success">
              Success
            </a>
          </div>
          <h2>Large Buttons</h2>

          <div>
            <a href="#" className="btn btn-primary btn-large">
              Primary
            </a>
            <a href="#" className="btn btn-danger btn-large">
              Danger
            </a>
            <a href="#" className="btn btn-warning btn-large">
              Warning
            </a>
            <a href="#" className="btn btn-success btn-large">
              Success
            </a>
          </div>
          <iframe
            src="https://carbon.now.sh/embed/FmhQQbMRplFEpchH24Ga"
            style={{
              marginTop: "5rem",
              marginBottom: "-12rem",
              width: "40rem",
              height: "40rem",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <hr />
        <div className="component-details" id="floating-btn">
          <h2>Floating Action Button</h2>
          <div>
            <a href="#" class="floating-btn btn-primary">
              +
            </a>
            <a href="#" class="floating-btn btn-danger">
              +
            </a>
            <a href="#" class="floating-btn btn-warning">
              +
            </a>
            <a href="#" class="floating-btn btn-success">
              +
            </a>
          </div>
          <div>
            <iframe
              src="https://carbon.now.sh/embed/qdD0YBYTuQ1fbrCtXmNT"
              style={{
                marginTop: "4rem",
                marginLeft: "-2rem",
                marginBottom: "-25rem",
                width: "40rem",
                height: "40rem",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden"
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="component-details" id="alerts">
          <h2>Alerts</h2>
          <div class="alert alert-error">
            <span>
              <i class="fas fa-exclamation-circle"></i>
            </span>{" "}
            <p> There seems to be an error</p>
          </div>
          <div className="seperator"></div>
          <div class="alert alert-success">
            <span>
              <i class="fas fa-check"></i>
            </span>{" "}
            <p> Everything seems to be working great</p>
          </div>
          <div className="seperator"></div>
          <div class="alert alert-warning">
            <span>
              <i class="fas fa-radiation-alt"></i>
            </span>{" "}
            <p> Warning! Check your code</p>
          </div>
          <div className="seperator"></div>
          <div class="alert alert-info">
            <span>
              <i class="fas fa-info"></i>
            </span>{" "}
            <p> FYI! Just informing you</p>
          </div>
          <div className="seperator"></div>
          <iframe
            src="https://carbon.now.sh/embed/RJsfL0pmQzZzd5Vcpoil"
            style={{
              marginLeft: "1rem",
              marginBottom: "-5rem",
              width: "40rem",
              height: "40rem",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <hr />
        <div className="component-details" id="badgecard">
          <h1>Badge on Cards</h1>

          <div class="card card-ecom badge-avatar">
            <div class="card-header ">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
                class="card-ecom-image"
              />
            </div>
            <div class="badge-card">Coming Soon!</div>
            <div class="card-body">
              <p class="item-name">iPhone XR</p>
              <p class="item-price">Rs. 37,899</p>
              <p class="item-rating">
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon> (5000+ Ratings)
              </p>
              <a href="#" class="cartButton btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <iframe
            src="https://carbon.now.sh/embed/7TkMhowBmOIh9HzpULjr"
            style={{
              marginTop: "4rem",
              marginLeft: "-1rem",
              width: "500px",
              height: "500px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <hr />
        <div className="component-details" id="avatar">
          <h1>Avatar</h1>

          <div>
            <div>
              <div class="avatar">
                <img
                  src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  class="avatar-image"
                />
              </div>

              <div class="avatar">
                <img
                  src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  class="avatar-border-image avatar-border"
                />
              </div>
            </div>
            <iframe
              src="https://carbon.now.sh/embed/8OQec8YbpGma7haL3lPM"
              style={{
                marginTop: "2rem",
                width: "514px",
                height: "200px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden"
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

// style={{
//   width: "622px",
//   height: "129px",
//   border: "0",
//   transform: "scale(1)",
//   overflow: "hidden"
// }}
