import React from "react";
import { useRef, useState, useEffect } from "react";
const NewBall = ({ ballX, ballY, ballRect }) => {
  const ballRef = useRef();
  const INITIAL_VELOCITY = 0.025;
  const VELOCITY_INCREASE = 0.00001;
  let velocity = INITIAL_VELOCITY
  let direction = { x: 0 , y:0}
  function rect() {
    if (ballRef == undefined)
    return
    return ballRef.current.getBoundingClientRect();
  }
  console.log(ballRef.current)
  function randomNumberBetween(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  function reset() {
    ballX = 50
    ballY = 50
   
    while (
      Math.abs(direction.x) <= 0.2 ||
      Math.abs(direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI)
      direction = { x: Math.cos(heading), y: Math.sin(heading) }
    }
   
  }
  function isCollision(rect1: { left: number; right: number; top: number; bottom: number; }, rect2: { right: number; left: number; bottom: number; top: number; }) {
    return (
      rect1.left <= rect2.right &&
      rect1.right >= rect2.left &&
      rect1.top <= rect2.bottom &&
      rect1.bottom >= rect2.top
    )
  }
 

  return (
    <div
      ref={ballRef}
      className="ball"
      id="ball"
      style={{ left: ` calc(${ballX} * 1vw)`, top: `calc(${ballY} * 1vh)` }}
    ></div>
  );
};

export default NewBall;
