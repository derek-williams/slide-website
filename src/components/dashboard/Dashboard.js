import React from 'react';
import { Card, Nav } from 'react-bootstrap'
import SlideNav from "../SlideNav";
import Footer from "../Footer";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const selector = useSelector(state => state);
  return (
    <div>
      <SlideNav/>
      <hr/>
      <Card style={{alignItems: 'center', width: '50rem', background:'#FFFFFF'}}>
        <Card.Header>
          {selector.user}
        </Card.Header>
        <Card.Body>
          <Nav.Link href="/application">Start Your Application</Nav.Link>
        </Card.Body>
      </Card>
      <hr/>
      <Footer/>
    </div>
  )
}
