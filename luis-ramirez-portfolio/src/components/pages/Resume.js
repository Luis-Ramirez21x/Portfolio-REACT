import React from "react";
import '../../styles/Resume.css'
import pdf from '../../pdfs/Luis-Ramirez-Resume.pdf'


function resume(){
    return (

        <div id="resumeContainer">
            <h1>Resume</h1>
            <h6>Download My Resume Here ---<a href={pdf}><span class="badge bg-danger">RESUME</span></a></h6>
            <h3>Education</h3>
            <ul>
                <li>GA Tech Full-Stack Coding Bootcamp(2021-2022)</li>
            </ul>
            <h3>Skills</h3>
            <h4>Front-end</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>REACT</li>
                    <li>Jquery</li>
                    <li>Materialize</li>
                    <li>BootStrap</li>
                </ul>
            <h4>Back-end</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    
                </ul>
        </div>
    )
}

export default resume;