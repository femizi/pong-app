import { useRef, useState } from "react";

import "./App.css";
import Ball from './NewBall'
import NewPaddle from './NewPaddle1'
import NewPaddle2 from './NewPaddle2'
import Score from './Score'

function App() {
  const [count, setCount] = useState(0);
  const ballRef = useRef();
  const player1ref = useRef();
  const player2ref = useRef();
  const INITIAL_VELOCITY = 0.025;
  const VELOCITY_INCREASE = 0.00001;
  let velocity = INITIAL_VELOCITY
  let direction = { x: 0 , y:0}
  let ballRect
  let ballX = 50;
  let ballY = 50;
  let playerScore = 0;
  let playerScore2 = 0;
  let paddlePosition1 = 50;
  let paddlePosition2 = 50;
  function  ballUpdate(delta, paddleRects) {
    ballX += direction.x * velocity * delta
    ballY += direction.y * velocity * delta
    velocity += VELOCITY_INCREASE * delta
    const rect = rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      direction.y *= -1
    }

    if (paddleRects.some((r: { left: number; right: number; top: number; bottom: number; }) => isCollision(r, rect))) {
      direction.x *= -1
    }
  }


 

  let lastTime;
  function update(time) {
    if (lastTime != null) {
      const delta = time - lastTime;
      Ball.update(delta, [Paddle1.rect(), Paddle2.rect()]);
      Paddle2.update(delta, ball.y);
      const hue = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--hue")
      );

      document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

      if (isLose()) handleLose();
    }

    lastTime = time;
    window.requestAnimationFrame(update);
  }

  function isLose() {
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0;
  }

  function handleLose() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
      playerScore += 1;
    } else {
      playerScore2 += 1;
    }
    ball.reset();
    Paddle2.reset();
  }
  window.requestAnimationFrame(update);

  return (
    <div className="App">

      <Score playerScore={playerScore} playerScore2={playerScore2} />
      <Ball ballX={ballX} ballY={ballY} ballRect={ballRect} />
      <NewPaddle paddlePosition1={paddlePosition1} />
      <NewPaddle2 paddlePosition2={paddlePosition2} ref={player2ref} />

    </div>
  );
}

export default App;
