import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.jpg";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddDetail from './AddDetail';

export default class AdminDashboard extends React.Component{
    render(){
        const textSize = window.innerWidth < 550 ? "0.6rem" : "2.3rem";
        return(
            <div>
                <Container fluid>
                <Row>
                     <Col>
                     <Navbar 
                    style={{
                        background: "linear-gradient(to right, green, #ffff88)",
                      }}
                     expand="lg"
                     fixed="top">
                            <Navbar.Brand>
                             <img src={logo} 
                                  width={70} 
                                  height={70} 
                                  alt='pauLogo'
                                  style={{borderRadius:'50%'}} />
                 
                              <span style={{ fontSize: textSize, color: "white" , marginLeft:'27%' }}>
                               PAU SALARY MANAGEMENT SYSTEM
                              </span>
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    
                    <span style={{ fontSize: "2.3vw", marginLeft:'31%' }} >
                      Punjab Agricultural University, Ludhiana
                    </span>
                  </Navbar.Text>
                </Navbar.Collapse>
                     </Navbar>
                     </Col>
                     
                   </Row>
                   <div style={{paddingTop:'150px'}}>
                   <Row>
                    <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row >
                       <Col sm={2} style={{background:'#EAFAF1'}}>
                                <Nav variant="pills" className="flex-column" >
                                <Nav.Item>
                                    <Nav.Link eventKey="newPost" style={{color:'#2ECC71'}} >
                                      Dashboard 
                                    </Nav.Link>
                                </Nav.Item>
                                </Nav>
                       </Col>                   
                    <Col sm={10}>
                    <Tab.Content>
                    <Tab.Pane eventKey="newPost"> 
                        <AddDetail/>
                   </Tab.Pane>
                    </Tab.Content>
                    
                    </Col>
                   </Row>
                   </Tab.Container>
                   </Col>
                   </Row>
                   </div>
                </Container>
            </div>
        )
    }
}