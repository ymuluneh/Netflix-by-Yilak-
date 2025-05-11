import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className=" col justify-content-center">
          <ul className="list-unstyled">
            <li>
              <FacebookIcon /> <InstagramIcon /> <YouTubeIcon />
            </li>
          
            <li>
              <a href="/">investor relation</a>
            </li>
            <li>
              <a href="/">privecy</a>
            </li>
            <li>
              <a href="/">
                servic code &copy; <br /> 1997-2025 inc
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
