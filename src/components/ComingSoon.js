import React, { Component } from "react";
import 'mdbreact/dist/css/mdb.css'
import './ComingSoon.css'
import {Card, Button, Form } from 'react-bootstrap'
import Footer from './Footer';
import ComingSoonNav from './ComingSoonNav';
import { Row, Column } from 'react-foundation';

const isMobile = window.innerWidth < 768;

class ComingSoon extends Component {

    call2actionStyle() {
        if (isMobile) {
          return {height:'70rem'}
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

    render() {
        return ( 
          <body>
             <Card style={this.call2actionStyle()} className="primary text-white text-left">
                <Card.Img src="/img/comingsoon.png" alt="Card image"/>
                <Card.ImgOverlay>
                <ComingSoonNav></ComingSoonNav>
                <Card.Body>           
                    <Card.Text><div style={this.vp1TextStyle()}>
                    Imagine Moving For a
                    <br></br>
                    Fresh New Start<br></br><br></br>
                    We offer Income-Sharing Agreements to help <br></br> people accept opportunities, <b> Anywhere! </b>
                    </div><br></br><br></br><br></br>
                    Sign-Up and receivce early access to <br></br> 
                    SLIDE: Income-Sharing Agreements<br></br><br></br>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Column>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Column>
                                <Column>
                                    <Button variant="primary" size="md">Submit</Button>
                                </Column>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Button variant="outline-primary" href="/faq" size="md">Learn More About SLIDE: ISA</Button><br></br><br></br><br></br><br></br>
                    <img
                        alt=""
                        src="/img/comingsoon-twitter.png"
                        width="69"
                        height="54"
                        className="d-inline-block align-top"
                        />
                    
                    FOLLOW @REALSLIDENOW for updates.

                    </Card.Text>
                </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Footer></Footer>
          </body>
        )
      }
    }
    
    export default ComingSoon;