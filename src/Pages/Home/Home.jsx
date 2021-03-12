import React from 'react';
import Particles from 'react-particles-js';
import { Landing } from '../../Components/Landing/Landing';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Tech } from '../../Components/Tech/Tech';
import styles from "./Home.module.css";
import Parallax from "react-rellax";
import { Projects } from '../../Components/Projects/Projects';
import { About } from '../../Components/About/About';
import { Git } from '../../Components/Git/Git';
import { Contact } from '../../Components/Contact/Contact';
import { Footer } from '../../Components/Footer/Footer';

export const Home = () => {

    return (
        <div>
            <Particles className = {styles.particles}
                params={{
                    "particles": {
                        "number": {
                            "value": 140,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "move": {
                            
                            "random": "false",
                            "speed": 2
                        },
                        "size": {
                            "value": 3
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "opacity_min": 1
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": "true"
                }}
            >
            </Particles>
            <Navbar/>
            <Landing/>
            <Parallax speed = {1}>
                <Tech/>
            </Parallax>
            <Parallax speed = {1}>
                <Projects/>
            </Parallax>
            <Parallax speed = {1}>
                <Git/>
            </Parallax>
            <Parallax speed = {1}>
                <About/>    
            </Parallax>
            <Parallax speed = {0}>
                <Contact/>
            </Parallax>
            <Parallax speed = {0}>
                <Footer/>
            </Parallax>        
        </div>
    )
}
