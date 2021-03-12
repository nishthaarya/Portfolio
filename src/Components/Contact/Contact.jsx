import React from 'react'
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <div id = "contact" className = {styles.contactme}>
            <div className = {styles.name} > Contact Me </div>
            <div className = {styles.contact}>
                <div>
                    <img alt = "github" src = "https://image.flaticon.com/icons/png/512/25/25231.png"/>
                    <a href = "https://github.com/nishthaarya">Github</a>
                </div>
                <div>
                    <img alt = "linkedin" src = "https://image.flaticon.com/icons/png/512/61/61109.png"/>
                    <a href = "https://www.linkedin.com/in/nishthaarya/" >LinkedIn</a>
                </div>
                <div>
                    <img alt = "twitter" src = "https://image.flaticon.com/icons/png/512/23/23931.png"/>
                    <a href = "https://twitter.com/aryacodes" >Twitter</a>
                </div>
                <div>
                    <img alt = "facebook" src = "https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"/>
                    <a href = "https://www.facebook.com/nishtha.arya.71" >Facebook</a>
                </div>
            </div>
        </div>
    )
}

