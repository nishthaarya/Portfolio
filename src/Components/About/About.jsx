import React from 'react'
import styles from "./About.module.css";
import self from "../../Images/pic.png";

export const About = () => {
    return (
        <div id = "about" className = {styles.about}>
            <div className = {styles.btm}>
                <div className = {styles.left}>
                    <div className = {styles.head}>About Me</div>
                    <div className = {styles.vice}>
                            I like to think of myself as a designer/developer hybrid - a unicorn with excellent people skills.
                    </div>
                    <div className = {styles.text}>
                        My non-tech roles and background have allowed me to develop exceptional soft skills and become a great communicator. I bring passion, determination and loyalty to any role I undertake.
                    </div>
                    <div className = {styles.text}>
                        I just graduated from the Full Stack Developer Bootcamp from Masai School and I am now looking for my first full time development role with room to grow and learn. I find the creativity and visual aspects of Frontend very interesting and would love the opportunity to grasp more about UI/UX.
                    </div>
                    <div className = {styles.extra}>
                        I love coding, traveling, dancing (Fun fact: I'm a professional dancer!), sunny weekends and leaving everything better than I found it. Sometimes I bake.
                    </div>
                </div>
                <div className = {styles.right}>
                    <img alt = "self" src = {self}/>
                </div>
            </div>    
        </div>                        
    )
}

