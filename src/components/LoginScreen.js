import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


class Login extends React.Component{
    render () {
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
                  

                  <Row style={{marginTop:'140px'}} > 
                  <div style={{backgroundColor:'#EAFAF1',paddingTop:'6%',padding:'4%'}}>
                    <div style={{backgroundColor:'white',opacity:'0.8',padding:'6%',color:'#239B56'}}>
                    <fieldset style={{border:'2px solid',padding:'5px',color:'black'}}>                                   
                                       <legend>Sign Up :</legend>
                    <Col  xs={12} md={12}>
                    <Form   style={{padding:'20px'}}> 
                    <Form.Group size="sm" controlId="email">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control
                      autoFocus
                      // type="email"
                      type="text"
                    //   value={username}
                      placeholder="Enter username"
                    //   onChange={(e) => this.setUsername(e.target.value)}
                    />
                  </Form.Group>
                 

                  <Form.Group size="sm" controlId="password" style={{marginTop:'2%'}}>
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control
                      type="password"
                    //   value={password}
                      placeholder="Enter password"
                    //   onChange={(e) => this.setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block
                    size="lg"
                    variant="success"
                    type="submit"
                    style={{marginTop:'2%',marginLeft:'30%'}}
                    // disabled={!this.validateForm()}
                  >
                    LOGIN
                  </Button>
                 </Form>
                    </Col>
                    </fieldset>
                    </div>
                    {/* </div> */}
                    </div>
                  </Row>
                  
                </Container>
            </div>
        );
    }
}
export default Login;