import "../LandingPage/Landingpage.css";
import { Link } from "react-router-dom";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { toast } from "react-toastify";

export default function LandingPage() {
  const handleSignInSuccess = () => {
    toast.success("Login successfull");
  };
  return (
    <div className="Lpage">
      {/* Navbar */}
      <div className="Navbar">
        <p id="logotxt">ExpenseWise</p>
        <div id="navitems">
          {/* SignUp Button */}
          <SignUpButton>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                margin: "25px",
              }}
              to="/Dashboard"
            >
              SignUp
            </Link>
          </SignUpButton>

          {/* SignIn Button */}
          <SignInButton onSuccess={handleSignInSuccess}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                margin: "30px",
              }}
              to="/Dashboard"
            >
              SignIn
            </Link>
          </SignInButton>

          {/* Download App Buttons */}
          <p className="btn" id="down" aria-label="Download App">
            <i className="bi bi-google-play"></i>
            {" | "}
            <i className="bi bi-apple"></i> Download app
          </p>
        </div>

        {/* Hamburger Menu */}
        <i className="bi bi-list" id="ham" aria-label="Menu"></i>
      </div>

      {/* Hero Section */}
      <div className="head">
        <h1 className="txt">
          Navigate Your Financial Journey with <br />
          Confidence and Clarity
        </h1>
        <p className="txt1">
          Reduce your financial worries and focus on achieving stability with
          <br />
          our intuitive AI expense tracker designed for your needs.
        </p>
        <p className="btn" id="down2" aria-label="Download App">
          <i className="bi bi-google-play"></i>
          {" | "}
          <i className="bi bi-apple"></i> Download app
        </p>
      </div>
    </div>
  );
}
