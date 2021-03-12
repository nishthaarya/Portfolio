import React from 'react'
import styles from "./Projects.module.css";
import youtube from "../../Images/youtube.gif"
import expense from "../../Images/expense.gif"
import cart from "../../Images/cart.gif"
import redux from "../../Images/redux.png"

export const Projects = () => {
    return (
        <div id = "projects" >
            <div className = {styles.projects}>
                <div className = {styles.name}> Projects </div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img className = {styles.image} alt = "netflix1" src = 'https://github.com/lsriniwas/Netflix-Clone/raw/master/screenshots/first.gif' />
                        
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
                <div className = {styles.line}></div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img className = {styles.image} alt = "shoppingcart" src = {cart} />
                        
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
                            <a href = "https://laughing-stonebraker-4af261.netlify.app/" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.line}></div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img className = {styles.image} alt = "expensemanager" src = {expense} />
                        
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
                <div className = {styles.line}></div>
                <div className = {styles.card}>
                    <div className = {styles.cardleft}>
                        <img className = {styles.image} alt = "youtubeclone" src = {youtube} />
                        
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
                            <a href = "https://youtube-clone-rose.vercel.app/#/home" className = {styles.demo}> Demo Link </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

