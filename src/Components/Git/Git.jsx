import React from 'react'
import styles from "./Git.module.css";
import github from "../../Images/github.png"

export const Git = () => {
    return (
        <div className = {styles.gits}>
                <div className = {styles.circles}>
                    <div className = {styles.circletop}>
                        <div className = {styles.gol} > 1200+ hours full stack coding </div>
                        <div className = {styles.gol}> 100+ hours soft skills training </div>
                        <div className = {styles.gol}> 300+ Hackerrank problems </div>
                        <div className = {styles.gol}> 300+ {`  `} Git commits</div>
                    </div>
                    <div >
                       <img alt = "github commits" src = {github}/>
                    </div>
                </div>
            </div>
    )
}

