import React from "react";
import styles from "./Home.module.css";
import Parallax from "react-rellax";
import {motion} from "framer-motion";
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import redux from "./redux.png";
import cart from "./cart.png";
import netflix from "./netflix.png";
import expense from "./expense.png";
import self from "./pic.png";
import youtube from "./youtube.png";
import github from "./github.png"

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
                Frontend Web Developer.
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
        <Parallax speed = {5}>
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
                        <img className = {styles.img} src = {redux} alt = "redux" />
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
        </Parallax>
        <Parallax speed = {5}>
            <div className = {styles.projects}>
                <div className = {styles.tech}> Projects </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img alt = "netflix1" src = {netflix} />
                        
                    </div>
                    <div className = {styles.cardright}>
                        <div className = {styles.heading}>Netflix Clone</div>
                        <div className = {styles.text}> Group Project | One Week </div>
                        <div className = {styles.smallicons}>
                            <img alt = "react" src = "https://cdn.svgporn.com/logos/react.svg"/>
                            <img alt = "redux" src = {redux} />
                            <img alt = "css" src = "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"/>
                            <img alt = "mongodb" src = "https://banner2.cleanpng.com/20180403/hyq/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ed28fc7.7809651415228143668625.jpg"/>
                            <img alt = "nodejs" src = "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>
                        </div>
                        <div className = {styles.details}>
                            <div>Cloned the biggest online video streaming platform, Netflix,</div>
                            <div> with a team of 4 developers.</div>
                        </div>
                        <div className = {styles.extra}>
                            <a href = "https://github.com/lsriniwas/Netflix-Clone" className = {styles.github}>Github Repository</a>
                            <a href = "https://masai-netflix.netlify.app/" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img alt = "shoppingcart" src = {cart} />
                        
                    </div>
                    <div className = {styles.cardright}>
                        <div className = {styles.heading}>E-Commerce Website</div>
                        <div className = {styles.text}> Solo Project | Two Weeks </div>
                        <div className = {styles.smallicons}>
                            <img alt = "react" src = "https://cdn.svgporn.com/logos/react.svg"/>
                            <img alt = "redux" src = {redux} />
                            <img alt = "css" src = "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"/>
                            <img alt = "mongodb" src = "https://banner2.cleanpng.com/20180403/hyq/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ed28fc7.7809651415228143668625.jpg"/>
                            <img alt = "nodejs" src = "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>
                        </div>
                        <div className = {styles.details}>
                            <div>Created a full stack e-commerce website from scratch.</div>
                            <div> Seamless shopping experience with an intuitive UI.</div>
                        </div>
                        <div className = {styles.extra}>
                            <a href = "https://github.com/nishthaarya/E-Commerce-Website" className = {styles.github}>Github Repository</a>
                            <a href = "https://github.com/nishthaarya/E-Commerce-Website" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img alt = "expensemanager" src = {expense} />
                        
                    </div>
                    <div className = {styles.cardright}>
                        <div className = {styles.heading}>Expense Manager</div>
                        <div className = {styles.text}> Pair Project | 3 days </div>
                        <div className = {styles.smallicons}>
                            <img alt = "javascript" src = "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"/>
                            <img alt = "html" src = "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png" />
                            <img alt = "css" src = "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"/>
                        </div>
                        <div className = {styles.details}>
                            <div>Built an expense managing app that allows a user to </div>
                            <div>add and view credit and debit transactions.</div>
                        </div>
                        <div className = {styles.extra}>
                            <a href = "https://github.com/MahenParameshwar/ExpenceManager" className = {styles.github}>Github Repository</a>
                            <a href = "https://expensemanagerjs.netlify.app/login.html" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img alt = "youtubeclone" src = {youtube} />
                        
                    </div>
                    <div className = {styles.cardright}>
                        <div className = {styles.heading}>Youtube Clone</div>
                        <div className = {styles.text}> Group Project | 1 Week </div>
                        <div className = {styles.smallicons}>
                            <img alt = "react" src = "https://cdn.svgporn.com/logos/react.svg"/>
                            <img alt = "css" src = "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"/>
                        </div>
                        <div className = {styles.details}>
                            <div>Created a picture perfect clone of Youtube, implemented debouncing search feature</div>
                            <div>along with recommendations being fetched from the Youtube API.</div>
                        </div>
                        <div className = {styles.extra}>
                            <a href = "https://github.com/nishthaarya/youtube-clone-1" className = {styles.github}>Github Repository</a>
                            <a href = "https://expensemanagerjs.netlify.app/login.html" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        <Parallax speed = {5}>
            <div className = {styles.projects1}>
                <div className = {styles.circlespage}>
                    <div className = {styles.circletop}>
                        <div className = {styles.gol} > <div> 1200+ hours full stack coding</div> </div>
                        <div className = {styles.gol}> <div>100+ hours soft skills training</div> </div>
                        <div className = {styles.gol}><div> 300+ Hackerrank problems </div></div>
                        <div className = {styles.gol}> <div>300+ {`  `} Git commits</div></div>
                    </div>
                    <div className = {styles.circlebtm}>
                        <img alt = "gitcommits" src = {github}/>
                    </div>
                </div>
            </div>
        </Parallax>
        <Parallax speed = {5}>
            <div className = {styles.projects}>
                <div className = {styles.newbtm}>
                    <div className = {styles.newleft}>
                        <div className = {styles.newhead}>About Me</div>
                        <div className = {styles.newvice}>
                             I like to think of myself as a designer/developer hybrid - a unicorn with excellent people skills.
                        </div>
                        <div className = {styles.newtext}>
                            My non-tech roles and background have allowed me to develop exceptional soft skills and become a great communicator. I bring passion, determination and loyalty to any role I undertake.
                        </div>
                        <div className = {styles.newtext}>
                            I just graduated from the Full Stack Developer Bootcamp from Masai School and I am now looking for my first full time development role with room to grow and learn. I find the creativity and visual aspects of Frontend very interesting and would love the opportunity to grasp more about UI/UX.
                        </div>
                        <div className = {styles.newextra}>
                            I love coding, traveling, dancing (Fun fact: I'm a professional dancer!), sunny weekends and leaving everything better than I found it. Sometimes I bake.
                        </div>
                    </div>
                    <div className = {styles.newright}>
                        <img alt = "self" src = {self}/>
                    </div>
                </div>    
            </div>
        </Parallax>
        </>
    )
}