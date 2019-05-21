import React from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';
import Logoreact from '../ui/react.svg';
import ReactTypingEffect from 'react-typing-effect';



class Home extends React.Component{
    
    render(){
        return(
            <div className="home">
                <Row >
                    <Col className="typo">
                        <div className="typing">
                        <ReactTypingEffect
                            text="This is My First React-App."
                        />
                        </div>
                        <div className="quote">
                        <p>"Don't repeat the same <span>ERROR</span>,<br/>because there are still<br/>
                        many <span>ERRORS</span> that we haven't tried."</p>
                        </div>
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
                    </Col>
                    <Col className="Logoreact">
                        <img src={Logoreact} alt="Logoreact"></img>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;