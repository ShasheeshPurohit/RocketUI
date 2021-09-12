import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="outer-home">
        <div className="home">
          <i class="fas fa-rocket logo-main"></i>
          <h1 className="main-heading">Welcome to rocket-ui</h1>
          <p className="sub-heading">
            Build Minimalistic and Beautiful UI using the Rocket UI library.
          </p>
          <Link to="/docs" className="btn-main">
            Get Started
          </Link>
        </div>
        <p className="tag-line">
          Made with <i class="fas fa-heart"></i> by Shasheesh
        </p>
      </div>
    </div>
  );
}
