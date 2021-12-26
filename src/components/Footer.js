import React from "react";
import 'mdbreact/dist/css/mdb.css'
import './Footer.css'

import { MDBContainer,  MDBFooter} from "mdbreact";

const Footer = () => (
  <MDBFooter color="primary" className='Footer'>
    <MDBContainer fluid className="text-center">
    <br></br><a href="https://twitter.com/RealSlideNow"><img
        alt=""
        src="/img/twitter.png"
        width="34"
        height="34"
        className="d-inline-block align-top"
      /></a>&#160;&#160;&#160;&#160;&#160;&#160;
      &#160;&#160;&#160;&#160;&#160;&#160;
      &#160;&#160;&#160;&#160;&#160;&#160;      
      <a href="https://www.instagram.com/realslidenow/?hl=en"><img
        alt=""
        src="/img/ig.png"
        width="34"
        height="34"
        className="d-inline-block align-top"
      /></a>&#160;&#160;&#160;&#160;&#160;&#160;
      &#160;&#160;&#160;&#160;&#160;&#160;
      &#160;&#160;&#160;&#160;&#160;&#160;      
      <a href="#linkedin"><img
        alt=""
        src="/img/linkein.png"
        width="34"
        height="34"
        className="d-inline-block align-top"
      /></a>
        <p>
             <br></br> &copy; {new Date().getFullYear()} Copyright: <a href="#Copyright"> slidenow.io </a>
        </p>
    </MDBContainer>
  </MDBFooter>
)

export default Footer;