import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className=" col justify-content-center">
          <ul className="list-unstyled lists">
            <li>
              <FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <YouTubeIcon />
            </li>

            <li>
              <a href="/">investor relation</a>
            </li>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/">
                <p>service code</p> <br /> &copy; 1997-2025 inc
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>
              <a href="/">Help center</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">cookis preference</a>
            </li>
            <li>
              <a href="/">legal notice</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>
              <a href="/">account</a>
            </li>
            <li>
              <a href="/">wayes to watch</a>
            </li>
            <li>
              <a href="/">corporate information</a>
            </li>
            <li>
              <a href="/">only on netflix</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>
              <a href="/">Media center</a>
            </li>
            <li>
              <a href="">terms of Use</a>
            </li>
            <li>
              <a href="">contact Us</a>
            </li>
            <li>
              <a
                className="yilak"
                href="http://www.yilakmuluneh.com"
                target="_blank"
              >
                Developed by Yilak M
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
