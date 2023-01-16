import React from "react";
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faPhone, faTwitter} from '@fortawesome/free-solid-svg-icons'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

import './Footer.css'

const Footer = () =>{
  return(
    // <!-- Footer -->
<footer className="text-center text-lg-start bg-white text-muted">

  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        
        {/* <!-- Grid column --> */}
        <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase  fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column -->/ */}
        <div className="col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
             links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column -->/ */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FontAwesomeIcon icon={faHome} className="home"/> Duhok, Barzan Street </p>
          
          <p><FontAwesomeIcon icon={faEnvelope} className="envelope me-2"/>
            jihadfed95@gmail.com  
          </p>
          <a className="tell1"  href="tel:07507932888"><FontAwesomeIcon icon={faPhone}  className="phone " />   07507932888</a>
          <a className="tell2"  href="tel:07507932888"><FontAwesomeIcon icon={faPhone} className="phone"/> 07507932888</a>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center copyfoot p-4">
    © 2023 Copyright:
    <a className="text-reset jihad fw-bold" href="https://jihadissa.netlify.app/">jihad Issa</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
// <!-- Footer -->
  )
}



export default Footer;