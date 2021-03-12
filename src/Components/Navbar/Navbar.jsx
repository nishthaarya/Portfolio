import React from 'react'
import {motion} from "framer-motion";
import styles from "./Navbar.module.css";
import {Link} from "react-scroll";
import { useHistory } from "react-router-dom";

export const Navbar = () => {

    const history = useHistory()

    const handleGame = () => {
        history.push("/game")
    }

    return (
        <div>
            <motion.div 
                className = {styles.navbar}
                initial = {{y: -250}}
                animate = {{y: 1}}
                transition = {{delay: 3, duration: .5, type: "spring", stiffness: 50}}
            >
                <Link color = "white" activeClass="active" to="about" spy={true} smooth={true} duration = {400} >
                    <div className = {styles.name} >
                    .About()
                    </div>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration = {400} >
                    <div className = {styles.name}>
                    .Projects()
                    </div>
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration = {400} >
                    <div className = {styles.name}>
                    .Skills()
                    </div>
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration = {400} >
                    <div className = {styles.name}>
                    .Contact()
                    </div>
                </Link>
                <div onClick = {handleGame}  className = {styles.name}>
                    .PlayaGame()
                </div>
            </motion.div>
        </div>
    )
}

