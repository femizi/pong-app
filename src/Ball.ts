// function isCollision(rect1: { left: number; right: number; top: number; bottom: number; }, rect2: { right: number; left: number; bottom: number; top: number; }) {
//   return (
//     rect1.left <= rect2.right &&
//     rect1.right >= rect2.left &&
//     rect1.top <= rect2.bottom &&
//     rect1.bottom >= rect2.top
//   )
// }

// function update(time) {
//   if (lastTime != null) {
//     const delta = time - lastTime;
//     ballUpdate(delta, [paddle1Rect, paddle2Rect]);

//     const hue = parseFloat(
//       getComputedStyle(document.documentElement).getPropertyValue("--hue")
//     );

//     document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

//     if (isLose()) handleLose();
//   }

//   lastTime = time;
//   window.requestAnimationFrame(update);
// }
// function ballUpdate(delta, paddleRects) {
//   let updateballX = ballX + direction.x * velocity * delta
//   let updateballY = direction.y * velocity * delta
//   setBallX(updateballX)
//   setBallY(updateballY)
//   velocity += VELOCITY_INCREASE * delta


//   if (ballY >= window.innerHeight || ballY <= 0) {
//     direction.y *= -1
//   }

//   if (paddleRects.some((r: { left: number; right: number; top: number; bottom: number; }) => isCollision(r, rect))) {
//     direction.x *= -1
//   }
// }






// function isLose() {
//   const rect = ballRect;
//   return rect.right >= window.innerWidth || rect.left <= 0;
// }

// function handleLose() {
//   const rect = ballRect;
//   if (rect.right >= window.innerWidth) {
//     playerScore += 1;
//   } else {
//     playerScore2 += 1;
//   }
//   reset();

// }



// import { JSXElementConstructor, ReactNode } from "react";

// const INITIAL_VELOCITY = 0.025;
// const VELOCITY_INCREASE = 0.00001;

// export default class Ball {
  
  
//   constructor(ballElem:JSX.Element, ballX:number, ballY:number, ballRef) {
//     this.ballElem = ballElem;
//     this.reset();
//     this.ballX= ballX;
//     this.ballY=ballY;
//     this.ballRef =ballRef
//   }

//   get x() {
//     return parseFloat(this.ballX);
//   }

//   set x(value) {
//     this.ballX =value;
//   }

//   get y() {
//     return parseFloat(this.ballY);
//   }

//   set y(value) {
//     this.ballY= value;
//   }

//   rect() {
//     return this.ballRef.current.getBoundingClientRect();
//   }

//   reset() {
//     this.x = 50;
//     this.y = 50;
//     this.direction = { x: 0 };
//     while (
//       Math.abs(this.direction.x) <= 0.2 ||
//       Math.abs(this.direction.x) >= 0.9
//     ) {
//       const heading = randomNumberBetween(0, 2 * Math.PI);
//       this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
//     }
//     this.velocity = INITIAL_VELOCITY;
//   }

//   update(delta: number, paddleRects: any[]) {
//     this.x += this.direction.x * this.velocity * delta;
//     this.y += this.direction.y * this.velocity * delta;
//     this.velocity += VELOCITY_INCREASE * delta;
//     const rect = this.rect();

//     if (rect.bottom >= window.innerHeight || rect.top <= 0) {
//       this.direction.y *= -1;
//     }

//     if (paddleRects.some((r: any) => isCollision(r, rect))) {
//       this.direction.x *= -1;
//     }
//   }
// }

// function randomNumberBetween(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

// function isCollision(
//   rect1: { left: number; right: number; top: number; bottom: number },
//   rect2: { right: number; left: number; bottom: number; top: number }
// ) {
//   return (
//     rect1.left <= rect2.right &&
//     rect1.right >= rect2.left &&
//     rect1.top <= rect2.bottom &&
//     rect1.bottom >= rect2.top
//   );
// }
export {}
