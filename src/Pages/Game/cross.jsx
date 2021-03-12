import React from 'react'
import pic from "./cross.png";
import styles from "./Game.module.css"

export const Cross = () => {
    return (
        <img id = {styles.cross} alt = "cross" src = {pic} width = "50px" style = {{marginTop: "3px", marginLeft: "4px"}} />
    )
}
