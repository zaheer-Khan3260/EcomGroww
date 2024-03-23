import React from "react";
import Image from './ECOMgroww.webp.webp'
import "./Footer.css"
import "./Responsive.css"
export default function Footer(){
    return(
        <>
        <footer className="footer-container animation">
      <section className="social-media-follow-container animation" style={{ backgroundColor: '#6351ce' }}>
        {/* left */}
        <div className="social-content-container">
          <span>Get connected with us on social networks</span>
        </div>
        {/* left */}
        
        {/* Right */}
        <a href="" className="text-white social me-4">
          <i className="fab fa-facebook-f ani"></i>
        </a>
        <a href="" className="text-white social me-4">
          <i className="fab fa-twitter ani"></i>
        </a>
        <a href="" className="text-white social me-4">
          <i className="fab fa-google ani"></i>
        </a>
        <a href="" className="text-white social me-4">
          <i className="fab fa-instagram ani"></i>
        </a>
        <a href="" className="text-white social me-4">
          <i className="fab fa-linkedin ani"></i>
        </a>
        {/* <a href="" className="text-white social  me-4">
          <i className="fab fa-github ani"></i>
        </a> */}
        {/* Right */}
      </section>

      <section className="footer-content-container">
        <div className="first-footer-container animation">
          <div className="company-name">
            <a className="navbar-brand navbar-logo" href="#"><img src={Image} alt="image" className="logo-image" /></a>
          </div>
          <div className="aboutus-content-container">
            <span className="aboutus-content">Founded in 2023 by Delhi's youngest entrepreneur A new business called ECOMgroww
              offers services to
              "Optimise your digital growth." ECOMgroww develop helps its clients break the mould of traditional
              business models by helping them develop online. </span>
          </div>
        </div>
        <div className="second-footer-container animation">
          <div className="content text-center">
            <h6 className="text-uppercase fw-bold" style={{ color: 'white' }}>Services</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
          </div>

          <p>
            <a href="#!" className="text-white">Social media marketing</a>
          </p>
          <p>
            <a href="#!" className="text-white">E-commerce</a>
          </p>
          <p>
            <a href="#!" className="text-white">Custom Web Developer</a>
          </p>
          <p>
            <a href="#!" className="text-white">SEO</a>
          </p>
          <p>
            <a href="#!" className="text-white">Google & Facebook Ads</a>
          </p>
        </div>

        <div className="third-footer-container animation">
          <div className="content" style={{ textAlign: 'center' }}>
            <h6 className="text-uppercase fw-bold" style={{ color: 'white' }}>Navbar links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
          </div>
          <p>
            <a href="#!" className="text-white">Home</a>
          </p>
          <p>
            <a href="#!" className="text-white">Services</a>
          </p>
          <p>
            <a href="#!" className="text-white">Contact</a>
          </p>
          <p>
            <a href="#!" className="text-white">About us</a>
          </p>
        </div>

        <div className="fourth-footer-container animation">
          <div className="content" style={{ textAlign: 'center' }}>
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
          </div>
          <p><i className="fas fa-home mr-3"></i>Khajoori khas,Delhi</p>
          <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i className="fas fa-phone mr-3"></i>+91 8130259381</p>
          {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
        </div>
      </section>

      <div className="text-center p-3 mt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
        © 2023 Copyright
        <a className="text-white" href="#">ECOMgroww</a>
      </div>
    </footer>
      </>
    );
}