import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero'
import 'animate.css';
import './style.css';
// import Logo from './logo.PNG'

class Home extends Component {
    render() {
        return (
            <div>
            <Navbar />
            {/* <img className="main-logo" src={Logo} alt="logo" /> */}

            <Hero
              backgroundImage="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FWhatsApp%20Image%202021-03-07%20at%206.13.46%20PM.jpeg?v=1615158926348">
            </Hero>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">              
                        <div className="banner-text"> 
                          {/* <div id="table"> */}
                          {/* </div> */}
                          <h2 className="mission" >Mission Statement</h2>
                          {/* <button type="button" id="resume" className="white-text btn purple lighten-2 waves-light"><a target='_blank' rel="noopener noreferrer" download className="white-text">Our Mission</a></button>  */}
                         <p id="mission" className="animate__animated animate__lightSpeedInRight animate__delay-3s text job">To inspire, transform and motivate young women around <br/> the world with the gospel of God.</p>

                    </div> 
                </div>
            </div>

            <div className="icon-bar">
            
                     

                  <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/home" id="twitter" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-twitter"> </i>
                  </a>
              
             
                  {/* <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCUiy0e6bdTxw9US54w4EHYA?view_as=subscriber" id="youtube" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-youtube"> </i>
                  </a>
             */}
              


               
                  <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/SheSparkles-100103011356815" id="facebook" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-facebook"></i>
                  </a>
              

             
                  <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/shesparkles20/" id="instagram" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-instagram"></i>
                  </a> 
          
        </div>  
      </div>

   
 
      <div className="footer">
        <p>© 2020 Tanya Kaponda</p>
      </div>

            </div>
        )
    }
}

export default Home;
