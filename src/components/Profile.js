import React from 'react';
import '../App.css';
import { Row, Col, Image } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';
import profil from '../ui/profil.svg';
import js from '../ui/js.svg';

import { easeQuadInOut } from "d3-ease";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import 'react-circular-progressbar/dist/styles.css';

class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <Row>
                    <Col xs={12} md={8} className="teks">   
                        <div className="name">
                        <ReactTypingEffect
                            text="Hi, I'm Jumuah!"
                        />
                        </div>
                        <Fade bottom>
                        <div className="desc">
                        <p>
                            I'm a <b>Computer and Information System</b> student, Vocational School, Gadjah Mada University.<br/>
                            I'm interested in becoming a <b>Web Developer</b> especially in the Developer Backend section.<br/>
                            On the other hand, I am also happy with the world of <b>videography</b> and <b>video editing</b>. Basically, 
                            I'm a person who is ready to work hard, be responsible, diligent, and mandate in carrying out duties.
                        </p>
                        </div>
                        </Fade>
                    </Col>
                    <Col xs={6} md={4}  className="Logoskil">
                        <Image src={js} alt="js"></Image>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} className="Logoprofil">
                        <Image src={profil} alt="profil"></Image>
                    </Col>
                    <Col xs={12} md={8}>
                    <div className="myskil">
                        <ReactTypingEffect
                            text="My SKill ?"
                        />
                    </div>
                    <div className="skilku">
                    <Row>
                        <Col xs={6} md={4} className="colo">
                        <AnimatedProgressProvider 
                            valueStart={0}
                            valueEnd={66}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                value={value}
                                text={`Web Dev`}
                                strokeWidth={6}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    pathColor: "turquoise",
                                    textSize: "14px"
                                    })}
                                />
                            );
                            }}
                        </AnimatedProgressProvider>
                        </Col>
                        <Col xs={6} md={4} className="colo">
                        <AnimatedProgressProvider 
                            valueStart={0}
                            valueEnd={50}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                value={value}
                                text={`Cisco`}
                                strokeWidth={6}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    pathColor: "turquoise",
                                    textSize: "14px"
                                    })}
                                />
                            );
                            }}
                        </AnimatedProgressProvider>
                        </Col>
                        <Col xs={6} md={4} className="colo">
                        <AnimatedProgressProvider 
                            valueStart={0}
                            valueEnd={30}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                value={value}
                                text={`Android`}
                                strokeWidth={6}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    pathColor: "turquoise",
                                    textSize: "14px"
                                    })}
                                />
                            );
                            }}
                        </AnimatedProgressProvider>
                        </Col>
                    </Row>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Profile;