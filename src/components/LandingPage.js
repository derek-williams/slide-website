import React, { Component } from "react";
import 'mdbreact/dist/css/mdb.css'
import './LandingPage.css'
import {Card, Button } from 'react-bootstrap'
import Footer from './Footer';
import SlideNav from './SlideNav';
import {LoginLogoutButton} from "./LoginLogoutButton";

const call2action = {
  color: 'white',
  fontSize: '60px',
};

const callsubtext={
  color: 'white',
  fontSize: '25px',
};

const mission ={
  color: 'white',
  fontSize: '40px',
};

const final={
  color: '#336699',
  fontSize: '45px',
  marginTop: '100px'
};

const finalsubtext={
  color: 'black',
  fontSize: '23px',
  marginTop: '100px'
};

const isMobile = window.innerWidth < 768;

class LandingPage extends Component {

call2actionStyle() {
  if (isMobile) {
    return {height:'70rem'}
  }
}

missionStyle() {
  if (isMobile) {
    return {height:'45rem'}
  }
}

finalStyle() {
  if (isMobile) {
    return {height:'55rem'}
  }
}

vp3Style() {
  if (isMobile) {
    return {height:'15rem'}
  }
}

vp2Style() {
  if (isMobile) {
    return {height:'25rem'}
  }
}

vp1TextStyle() {
  if (isMobile) {
    return {
      color: 'white',
      fontSize: '45px',
    }
  }
  else {
    return {
      color: 'white',
      fontSize: '45px',
      marginRight: '400px',
      marginTop: '200px'
    }
  }
}

vp1SubTextStyle() {
  if (isMobile) {
    return {
      color: 'white',
      fontSize: '20px',
    }
  }
  else {
    return {
      color: 'white',
      fontSize: '20px',
      marginRight: '400px',
      marginTop: '50px'
    }
  }
}

vp2TextStyle() {
  if (isMobile) {
    return {
      color: '#336699',
      fontSize: '45px',
    }
  }
  else {
    return {
      color: '#336699',
      fontSize: '45px',
      marginLeft: '400px',
      marginTop: '100px'
    }
  }
}

vp2SubTextStyle() {
  if (isMobile) {
    return {
      color: '#336699',
      fontSize: '20px',
    }
  }
  else {
    return {
      color: '#336699',
      fontSize: '20px',
      marginLeft: '450px',
      marginTop: '20px'
    }
  }
}

  render() {
    return (
      <body>
      <Card style={this.call2actionStyle()} className="primary text-white text-center">
        <Card.Img src="/img/BackgroundImage.png" alt="Card image"/>
        <Card.ImgOverlay>
          <SlideNav></SlideNav>
          <Card.Body>
            <Card.Title  className= "title"><div style={call2action}>
              Accept Career Opportunities
              <br></br><br></br>
              Without Financial Concern
              <br></br><br></br>
            </div></Card.Title>
            <img
              alt=""
              src="/img/lp-icons.png"
              width="309"
              height="62"
              className="d-inline-block align-top"
            /><br></br><br></br><br></br><br></br>
            <Card.Text><div style={callsubtext}>
              Apply to SLIDE: Income-Sharing Agreement and pursue your<br></br> dream opportunity
            </div><br></br><br></br><br></br>
            </Card.Text>
            <Button variant="outline-light" size="lg">Learn More</Button><br></br><br></br>
            <LoginLogoutButton/>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card style={this.missionStyle()} className="primary text-white text-center">
        <Card.Img src="/img/Mission.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><div style={mission}>
            We believe hard work pays off! But in reality that’s not always the case.
            <br></br>Moving for an opportunity is a difficult experience.<br></br><br></br>

            This is why we finance your moving and you pay back a percentage of your<br></br>
            income for a fixed period of time.</div></Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Card className="primary text-white text-right">
        <Card.Img src="/img/ValueProp1.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><div style={this.vp1TextStyle()}>No Interest</div></Card.Title>
          <Card.Text>
            <div style={this.vp1SubTextStyle()}> ISA's are the answer!</div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card style={this.vp2Style()} className="bg-white text-blue">
        <Card.Img src="/img/ValueProp2.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><div style={this.vp2TextStyle()}>
            <b>A. Your Job is your<br></br>&#160;&#160;&#160;&#160;&#160;&#160;Credit Score<br></br>
              B. No Credit Score<br></br>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Required</b><br></br></div>
          </Card.Title>
          <Card.Text><div style={this.vp2SubTextStyle()}>
            &#160;&#160;&#160;&#160;You are more than a credit score.<br></br><br></br>
            &#160;&#160;We use your salary and Slide score to <br></br> generate your Income Sharing Agreement</div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card style = {this.vp3Style()} className="primary text-white text-right">
        <Card.Img src="/img/ValueProp3.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><div style={this.vp1TextStyle()}>Accesible</div></Card.Title>
          <Card.Text>
            <div style={this.vp1SubTextStyle()}> Moving is <b>very</b> expensive! <br></br><br></br>
              Your personalized payment plan allows you to<br></br> puruse opportunities whenever, wherever.</div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card style={this.finalStyle()} className="bg-white text-blue text-center">
        <Card.Img src="/img/ValueProp4.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Title><div style={final}><b>Submit your SLIDE Application to finance your success story</b></div></Card.Title>
            <Card.Text><div style={finalsubtext}>
              Are you planning to move within the next three months?<br></br> <br></br>
              Do you need finanical support for moving expenses? <br></br> <br></br>
              We’re currently accepting applications for 2020! <br></br> <br></br></div>
            </Card.Text>
            <Button  href="/application" variant="warning"className="button-color" size="lg">Start Your Application</Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Footer> </Footer>
      </body>
    )
  }
}

export default LandingPage;
