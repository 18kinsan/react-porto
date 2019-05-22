import React from 'react';
import '../App.css';
import axios from 'axios';
import {Col, Row, Card, Image} from 'react-bootstrap';
import code from '../ui/code.svg';
import Fade from 'react-reveal/Fade';

class Portofolio extends React.Component{
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/18kinsan/Json-portofolio/portofolio`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    render(){
        return(
            <div className="portofolio">
                
                <Row>
                    <Col xs={12} md={8} >
                    <Fade top>
                    <h1 style={{paddingRight:"30px"}}>My Portofolio</h1>
                    </Fade>
                    <br/>
                    <Row>
                    { this.state.persons.map(person =>
                        <Col xs={6} md={4}>
                            <Card className="kartu" >
                            <Card.Img style={{maxHeight:"160px"}} variant="top" src={"/"+person.foto+".svg"} />
                            <Card.Body style={{backgroundColor:"#38d39f"}}>
                                <Card.Title style={{textAlign:"center"}}>{person.title}</Card.Title>
                                <Card.Text style={{textAlign:"center"}}>
                                I'm becoming a<br/><b>{person.jobdesk}</b>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        
                    )}
                    
                    </Row>
                    </Col>
                    <Col xs={6} md={4} className="code">
                        <Image src={code} alt="code"></Image>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Portofolio;