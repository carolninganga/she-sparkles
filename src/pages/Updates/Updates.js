import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Project from '../../components/Project/Project';
import './style.css';

class Updates extends Component {
    render() {
        return (
            <>
            <Navbar />
        
            <div class="container-fluid mt-4 mb-0 pb-3">
            <div class="row pb-0 mb-0">

               <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202021-03-07%20at%208.47.13%20PM.png?v=1615168061891"
                name="Tanya Kaponda"
                description="Founder | Author"
                github="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Ftanyas%20profile.pdf?v=1615174407538"
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202021-03-07%20at%208.29.54%20PM.png?v=1615167037212"
                name="Ekari Makunganya"
                description="WARI Designer"
                github="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fekari.pdf?v=1615176522258"
                />

                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202021-03-07%20at%208.49.15%20PM.png?v=1615168202102"
                name="Helga Ning'ang'a"
                description="Founder Grace Givers" 
                github="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fhelgas%20profile.pdf?v=1615173853928"
                site="https://polar-castle-87426.herokuapp.com/" 
                />
                </div>

 
                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202021-03-07%20at%209.04.34%20PM.png?v=1615169096677"
                name="Ladies of Influence"
                description="Kulukaya Sadiki "
                github="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fk'sprofile.pdf?v=1615183410804"
                />

                {/* <Project 
                img="https://cdn.glitch.com/2e860639-24bb-4041-8055-aed7de1c1244%2Fimg-project2.jpeg?v=1581869386824"
                name="Weather App"
                description="Provide Current and Next 5 Day's Weather"
                github="https://github.com/PhoebeYahengWu/Weather-Forecast-Web-App-With-jQuery"
                site="https://phoebeyahengwu.github.io/Weather-Forecast-Web-App-With-jQuery/" 
                />

                <Project 
                img="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2Fimage-3.jpeg?v=1588474053478"
                name="Database UI"
                description="Create User Interface for MySQL Database"
                github="https://github.com/PhoebeYahengWu/Company-Database-UI"
                site="https://database-user-interface.herokuapp.com/" 
                /> */}


                </div>

                 


                </div>
            </>
        )
    }
}

export default Updates