import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="Center">
        <div>
          <p>
            Welcome to <br />
            My<b>Jobs</b>
            <br />
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/photos/shot-of-two-young-businesswomen-shaking-hands-in-a-modern-office-picture-id1315012808?b=1&k=20&m=1315012808&s=170667a&w=0&h=gtrNKtg_Cwvc6l0TUZwiZ9XhZDBZGJExOo_kWUKp-iU="
          alt="Job_image"
        />
        <br />
        <button className="Get-started">
          <Link className="Started" to="/login">
            Get Started
          </Link>
        </button>
      </div>

      <div className="secound">
        <h2>Why us</h2>
        <div className="container-boxes">
          <div className="box">
            <h4>
              Get more <br />
              visibility
            </h4>
            <p className="boxe-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="box">
            <h4>
              Organize your <br />
              candidates
            </h4>
            <p className="boxe-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box">
            <h4>
              Verify their <br />
              cabilities
            </h4>
            <p className="boxe-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
