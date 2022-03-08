import React from 'react'
import { useRef, useState } from "react";
const NewPaddle2 = ({paddlePosition2 }) => {
    const player2ref = useRef();
  return (
    <div
    ref= {player2ref}
      className="paddle right"
      id="computer-paddle"
      style={{ top: `calc(${paddlePosition2} * 1vh)` }}
    ></div>
  )
}

export default NewPaddle2