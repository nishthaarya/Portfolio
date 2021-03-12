import React, { useState } from 'react'
import {Circle} from "./circle"
import styles from "./Game.module.css";
import {Cross} from "./cross"
import { useHistory } from 'react-router-dom';


export const Game = () => {
    const [positions, setPositions] = useState(new Array(9).fill(null))
    const [turn, setTurn] = useState("circle");
    const [winner, setWinner] = useState(undefined);
    const [wins, setWins] = useState([])

    const handleWinner = () => {
        setPositions(new Array(9).fill(null))
        setWinner(undefined)
        setTurn("circle")
        setWins([])
    }

    const handleClick = (index) => {
        if(!positions[index] && !winner ) {
            setPositions(prevPositions => {
                const positions = prevPositions.slice();
                if(turn === "circle") {
                    setTurn("cross")
                }
                else {
                    setTurn("circle")
                }
                positions[index] = turn;
                const lines = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ]

                lines.forEach((line) => {
                    const [a, b, c] = line
                    if(positions[a] === positions[b] && positions[a] === positions[c] && positions[b] === positions[c] && positions[a] !== null && positions[b] !== null ) {
                        setWinner(turn);
                        setWins(line)
                    }
                })
                return positions
            })
        }
        else {
            return positions
        }
    }


    const history = useHistory()

    const handleLeave = () => {
        history.push("/")
    }
    
    const showElement = icon => {
        if(icon === "cross") {
            return <Cross/>
        }
        else if(icon === "circle") {
            return <Circle/>
        }
        else {
            return null;
        }
    }

    const divisions = positions.map((val, index) => {
        
        const isWinner = wins.includes(index)

        return (
            <div className = {isWinner ? styles.red : null} onClick = {(i) => handleClick(index)} >
                {showElement(val)}
            </div>
        )
    })


    return (
        <>
        <div className = {styles.page} >
            <div className = {styles.layer}>
            <div className = {styles.heading}>Tic Tac Toe</div>
            <div className = {styles.game}>
                {divisions}
            </div>
            <div className = {styles.btm}>
                {!winner && <div> Turn: {turn} </div> }
                {winner && <div> Winner: {winner}! </div>}
                {winner && <div className = {styles.btns}>
                    <button onClick = {handleWinner} >Play Again</button>
                    <button onClick = {handleLeave} >Go Back</button>
                </div> }
                {!winner && <div className = {styles.btns}>
                    <button onClick = {handleWinner} >Play Again</button>
                    
                </div> }
            </div>
            </div>
        </div>
        </>
    )
}

