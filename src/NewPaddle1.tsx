import React from 'react'
import { useRef, useState } from "react";

const NewPaddle1 = ({ paddlePosition1}) => {
  const SPEED = 0.02
  const player1ref = useRef();


  function position(value) {
    paddlePosition1 = value;
  }

 function rect() {
    return player1ref.current.getBoundingClientRect();
  }

 function reset() {
    paddlePosition1 = 50;
  }

 function update(delta, ballHeight) {
    paddlePosition1 += SPEED * delta * (ballHeight - paddlePosition1);
  }



  return (
    <div
      ref={player1ref}
      className="paddle left"
      id="player-paddle"
      style={{ top: `calc(${paddlePosition1} * 1vh)` }}
    ></div>
  )
}

export default NewPaddle1