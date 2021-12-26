import React, { Component } from "react";
import 'mdbreact/dist/css/mdb.css'
import './Faq.css'
import Footer from './Footer';
import {Card, Button, Accordion } from 'react-bootstrap'
import SlideNav from './SlideNav';

const call2action = {
    color: 'white',
    fontSize: '60px',
  }

class Faq extends Component {
  render() {
    return (
    <div>
      <Card className="bg-dark text-white text-center">
      <Card.Img src="/img/faq-header.png" alt="Card image" />
      <Card.ImgOverlay>
      <SlideNav></SlideNav>
      <Card.Body>
          <Card.Title  className= "title"><div style={call2action}> 
          Frequently Asked Questions</div></Card.Title>
      </Card.Body>
      </Card.ImgOverlay>
      </Card>
      <Card className="text-center" style={{alignItems: 'center'}} > 
        <Accordion defaultActiveKey="0">
        <br></br><br></br><br></br>
        <Card style={{alignItems: 'center', width: '50rem', background:'#FFFFFF'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              What is an income-sharing agreement (ISA)? 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              An income-sharing agreement (ISA) is a contract between a borrower and a provider. The borrower agrees to repay the provider a fixed percentage of their gross income over a pre-defined fixed period of time. 
            </Card.Body>
          </Accordion.Collapse>
        </Card><br></br><br></br><br></br>
        <Card style={{alignItems: 'center', width: '50rem'}}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            What are the differences between an income-sharing agreement (ISA) and a personal loan? 
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body> 
            Due to an ISA is based on your employment, if you become unemployed, you are not legally required to repay. For that reason, SLIDE is strongly incentivized to ensure you are employed and succeed in your career goals.  Personal loans use credit scores and other conventional variables (i.e. education) to determine the terms of the loans. Instead of a credit score, ISAs use your employment status to determine the terms of the ISAs. ISAs repayments are interest-free and are based on a percentage of your income and not a fixed principle. 
          </Card.Body>
        </Accordion.Collapse>
      </Card><br></br><br></br><br></br>
        <Card style={{alignItems: 'center', width: '50rem'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Does applying to SLIDE ISA affect my credit score? 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body> 
              No.
            </Card.Body>
          </Accordion.Collapse>
        </Card><br></br><br></br><br></br>
        <Card style={{alignItems: 'center', width: '50rem'}}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            When do repayments begin? 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body> 
              There is a minimum 30 day grace period from the start of your employment. If you are employed prior to relocating, then the minimum 30 day grace period will start once you successfully arrive at your new location.
            </Card.Body>
          </Accordion.Collapse>
        </Card><br></br><br></br><br></br>
      </Accordion>
      <Button href="/application" variant="warning"className="button-color" size="lg">Start Your Application</Button><br></br><br></br><br></br>
      </Card>
      <Card bg="light" className="text-center">
      <Card.Body>
        <Card.Title>Was This Page Helpful?</Card.Title>
          <Button variant="primary" size="lg" type="submit">Yes</Button>
          <Button variant="outline-primary" size="lg" type="submit">No</Button>
      </Card.Body>
      </Card>
      <Card className="text-center">
      <Card.Body>
        <Card.Title>Didn't Find What you Were<br></br> Looking For?</Card.Title>
        <Button variant="primary" size="lg" type="submit">Email Us</Button>
        <br></br><br></br><br></br>
      </Card.Body>
      </Card>
      <Footer></Footer>
    </div>
        );
  }
}

export default Faq;