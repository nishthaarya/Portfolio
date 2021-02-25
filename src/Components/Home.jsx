import React from "react";
import styles from "./Home.module.css";
import Parallax from "react-rellax";
import {motion} from "framer-motion";
import pic from "./pic.jpeg"
import pics from "./pic-removebg-preview.png";
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import netflix1 from "./netflix1.png"
import netflix2 from "./netflix2.png"
import laptop from "./laptop.png"

export const Home = () => {

    return(
        <>
        <div className = {styles.full}>
            <Parallax speed = {-6}>
            <motion.div 
                className = {styles.navbar}
                initial = {{y: -150}}
                animate = {{y: 0}}
                transition = {{delay: 3, duration: .5, type: "spring", stiffness: 50}}
            >
                <div>
                    About
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Blogs
                </div>
                <div>
                    Contact
                </div>
            </motion.div>
            </Parallax>
            <Parallax speed = {-4}>
            <motion.div
                className = {styles.name}
                initial = {{y: -300}}
                animate = {{y: 250}}
                transition = {{delay: 1, duration: 1, type: "spring", stiffness: 100}}
            >
                Hi, I'm Nishtha Arya
            </motion.div>
            </Parallax>
            <Parallax speed = {-4}>
            <motion.div
                className = {styles.name}
                initial = {{y: -500}}
                animate = {{y: 250}}
                transition = {{delay: 2, duration: 1, type: "spring", stiffness: 100}}
            >
                Full Stack Web Developer
            </motion.div>
            <motion.button
                className = {styles.btn}
                initial = {{opacity: 0, y: 300}}
                animate = {{opacity: 1, y: 300}}
                transition = {{delay: 4}}
            >
                Click to play a game
            </motion.button>
            </Parallax>
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
                            
                            "random": "true",
                            "speed": 2
                        },
                        "size": {
                            "value": 2
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 2,
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
        </div>
        <Parallax speed = {7}>
        <ScrollAnimation duration = {2} animateIn="fadeIn">
        <div className = {styles.aboutpage}>
                <div className = {styles.tech}>Tech Stack</div>
                <div className = {styles.abtbtm}>
                    <div className = {styles.box}>
                        <img src = "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png" alt = "html" />
                        <div> HTML </div>
                    </div>
                    <div className = {styles.box}>
                        <img src = "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" alt = "css" />
                        <div> CSS </div>
                    </div>
                    <div className = {styles.box}>
                        <img src = "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt = "js" />
                        <div> JavaScript </div>
                    </div>
                    <div className = {styles.box}>
                        <img className = {styles.img} src = "https://cdn.svgporn.com/logos/react.svg" alt = "react" />
                        <div> React </div>
                    </div>
                    <div className = {styles.box}>
                        <img className = {styles.img} src = "http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" alt = "redux" />
                        <div> Redux </div>
                    </div>
                    <div className = {styles.box}>
                        <img src = "https://banner2.cleanpng.com/20180403/hyq/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ed28fc7.7809651415228143668625.jpg" alt = "mongoDB" />
                        <div> MongoDB </div>
                    </div>
                    <div className = {styles.box}>
                        <img className = {styles.img} src = "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt = "nodeJS"/>
                        <div> NodeJS </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        </Parallax>
        <Parallax speed = {5}>
            <div className = {styles.projects}>
                <div className = {styles.tech}> Projects </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img alt = "netflix1" src = "https://o.remove.bg/downloads/0e2dc311-6994-454f-bea8-ca9080ea5ed7/A156D6E0-8D3E-4C3A-9037-00CAE30415BE-removebg-preview.png" />
                        
                    </div>
                    <div className = {styles.cardright}>
                        <div className = {styles.heading}>Netflix Clone</div>
                        <div className = {styles.extra}>
                            <a href = "https://github.com/lsriniwas/Netflix-Clone" className = {styles.github}>Github Repository</a>
                            <a href = "https://github.com/lsriniwas/Netflix-Clone" className = {styles.demo}> Demo Link </a>
                        </div>
                        <div className = {styles.details}>
                            <div>Cloned the biggest online video streaming platform, Netflix,</div>
                            <div> with a team of 4 developers.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </>
    )
}