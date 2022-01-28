import React from "react";
import portfolioPicture from '../images/Portfolio_Picture.jpg';
import '../styles/Project.css'

const styles = {
    asideStyles: {
        img:{
            height:'500px',
            width:'500px',
        }
    }
}

function Project () {
    return (
        <div>
            <aside>
                <img 
                src={portfolioPicture} 
                alt="picture of Luis Ramirez" 
                id="profilePic"/>
            </aside>
            <section>
                <h3>Bio</h3>
                <p>Hello! My name is Luis! I am a full stack web developer student currently completing a certification at GA Tech. I was born and raised in Atlanta, Georgia but have also spent a few years in Texas and Oklahoma where I got a feel for different industries before circling back to programming.  Construction and sales are the bulk of my work experience, but programming is where my passion lies.
                Currently I am a Sales rep with Best Buy where I have a lot of fun tinkering with new tech and interacting with people from all sorts of backgrounds. I hope to soon transition into a career in web development where I can continue to grow my skill set. 
                </p>
            </section>
            <section>
                <h3>Hobbies</h3>
            </section>
        </div>
    )
}

export default Project;