import React from 'react';
import '../App.css';
import {Col, Row, Image, Form, Button} from 'react-bootstrap';
import kontak from '../ui/kontak.svg';
import Fade from 'react-reveal/Fade';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <Row>
                    <Col xs={9} md={6} className="kontak">
                        <Image src={kontak} alt="kontak"></Image>
                    </Col>
                    <Col xs={9} md={6} className="pesan">
                        <Fade right>
                        <h1>Sepik Me!</h1>
                        </Fade>
                        <Fade clear>
                        <Form>
                        <Row>
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                            <Form.Control as="textarea" rows="3" placeholder="Enter Message Here"/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                        <Col>
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Col>
                        </Row>
                        </Form>
                        </Fade>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;