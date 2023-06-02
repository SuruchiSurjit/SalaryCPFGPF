import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddDetail extends React.Component{
render(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col md={4}> 
                        <Card style={{ width: '25rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <Card.Title>Add College</Card.Title>
                        <hr/>
                        <Card.Text>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>College</b></Form.Label>
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}
                                placeholder="COAET"
                              //   onChange={(e) => this.setUsername(e.target.value)}
                    />
                  </Form.Group>
                            
                            </Col>
                        </Row>
                        </Card.Text>
                        <Button variant="primary">Add</Button>
                        </Card.Body>
                        </Card>

                    </Col>
                    <Col md={4} sm={12}> 
                        <Card style={{ width: '25rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <Card.Title>Add Department</Card.Title>
                        <hr/>
                        <Card.Text>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Select College</b></Form.Label>                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                              //   onChange={(e) => this.setUsername(e.target.value)}
                             />
                              </Form.Group>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Department</b></Form.Label>
                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                              //   onChange={(e) => this.setUsername(e.target.value)}
                    />
                    </Form.Group>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>DDO Code</b></Form.Label>                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                              //   onChange={(e) => this.setUsername(e.target.value)}
                             />
                              </Form.Group>
                            
                            </Col>
                        </Row>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>

                    </Col>
                    <Col md={3} sm={12}> 
                        <Card style={{ width: '25rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <Card.Title>Add Scheme</Card.Title>
                        <hr/>
                        <Card.Text>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Scheme Name</b></Form.Label>                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                              //   onChange={(e) => this.setUsername(e.target.value)}
                             />
                              </Form.Group>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Scheme Code</b></Form.Label>                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                              //   onChange={(e) => this.setUsername(e.target.value)}
                             />
                              </Form.Group>
                            
                            </Col>
                        </Row>
                        
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>

                    </Col>
                    <Col md={3} sm={12}> 
                        <Card style={{ width: '25rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <Card.Title>Add Project</Card.Title>
                        <hr/>
                        <Card.Text>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Select Scheme</b></Form.Label>
                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                                //   onChange={(e) => this.setUsername(e.target.value)}
                                />
                                </Form.Group>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Project Name</b></Form.Label>
                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                                //   onChange={(e) => this.setUsername(e.target.value)}
                                />
                                </Form.Group>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Form.Group size="sm" controlId="email">
                             <Form.Label><b>Project Code</b></Form.Label>
                            
                             <Form.Control
                                autoFocus                                
                                type="text"
                                //   value={username}                               
                                //   onChange={(e) => this.setUsername(e.target.value)}
                                />
                                </Form.Group>
                            
                            </Col>
                        </Row>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>

                    </Col>
                </Row>
            

            </Container>
        </div>

    )
}
}