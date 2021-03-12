import React from 'react'
import styles from "./Tech.module.css";
import redux from "../../Images/redux.png"

export const Tech = () => {
    return (
        <div id = "skills">
            <div className = {styles.skills}>
                <div className = {styles.name}>Tech Stack</div>
                <div className = {styles.bottom}>
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
        </div>
    )
}

