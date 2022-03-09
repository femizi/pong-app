import React, { useRef } from "react";
const NewBall = props => {
  const propTypes = useRef({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  });
  return <div style={{
    width: "30px",
    height: "30px",
    top: `${props.y}px`,
    left: `${props.x}px`,
    position: "absolute",
    backgroundColor: "white"
  }} className="PongBall" />;
};
export default NewBall;
