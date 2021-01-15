
import React, { Component } from "react";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css'



class Home extends Component {
   

    render() {
        return (
            <>

            <Container fluid="md">
                <Row>
                    <Col>
                        <div className="logoImg">
                            <img sytle={{width:"600"}} src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Ftanya-removebg.png?v=1603922149448" />
                        </div>
                        <div className="discription">
                            <h2> Mission Statement</h2>
                            <p className="mission">
                            She Sparkles is all about encouraging women from all walks of life to realize how 
                            God has destined them to sparkle. It is about reminding woman that  is a very special 
                            part of the character and nature of God.
                            </p>
                            {/* <h2> Our Vision</h2>
                            <p className="mission">
                            Mobilise communities in advancement of child and women rights and human
                            development by using education, health and environmental programs.
                            </p>
                            <h2> Goals and Objectives</h2>
                            <p className="mission">
                            The goal of Grace Givers is to help children enjoy life and develop their
                            intellectual capacity as they grow to maturity. The organisation will achieve this
                            through the following specific objectives. In addition, we want to empower
                            women in daily activities such as food preparation, health tips and also
                            productive but low cost farming methods.
                            </p> */}
                            <ul>
                                {/* <li className="listItem">
                                To provide support to children through community based groups such
                                as childcare (feed the children trust) centers, educational centers and
                                other community structures (kitchen, library, and game center).
                                </li>
                                <li className="listItem">
                                To introduce innovative approaches for empowering children, families
                                and communities (training programs).
                                </li>
                                <li className="listItem">
                                To impart knowledge and skills by working with groups of children and
                                women in their communities
                                </li> */}
                            </ul>
                            {/* <div className="sociallinks">
                            <a href="carolninganga@gmail.com"><i className="fab fa-instagram-square"></i></a>
                            <a target="_blank"  href="https://github.com/carolninganga"><i className="fab fa-facebook-square"></i></a>
                            <a target="_blank"  href="https://www.linkedin.com/in/carolineninganga/"><i className="fab fa-twitter-square"></i> </a>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Home;