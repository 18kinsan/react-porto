import React from 'react';
import '../App.css';
import {Row, Col, Image} from 'react-bootstrap';
import Logoreact from '../ui/react.svg';
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';



class Home extends React.Component{
    
    render(){
        return(
            <div className="home">
                <Row>
                    
                    <Col className="typo" xs={9} md={6}>
                        <div className="typing">
                        <ReactTypingEffect
                            text="This is My First React-App."
                        />
                        </div>
                        <Fade bottom>
                        <div className="quote">
                        <p>"Don't repeat the same <span>ERROR</span>,<br/>because there are still<br/>
                        many <span>ERRORS</span> that we haven't tried."</p>
                        </div>
                        </Fade>
                        <Fade botttom>
                        <div className="middle">
                            <span>-B</span>
                            <span className="hidden">U</span>
                            <span className="hidden">O</span>
                            <span className="hidden">D</span>
                            <span className="hidden">O</span>
                            <span className="hidden">&nbsp;</span>
                            <span className="hidden">A</span>
                            <span className="hidden">M</span>
                            <span className="hidden">A</span>
                            <span>D-</span>
                        </div>
                        </Fade>
                    </Col>
                    
                    <Col className="floating" xs={9} md={6}>
                        <Image src={Logoreact} alt="Logoreact"></Image>
                    </Col>
                    
                </Row>
            </div>
        )
    }
}

export default Home;