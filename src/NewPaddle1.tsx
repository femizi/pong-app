import React, { useRef } from 'react';
const NewPaddle1 = (props = {
  onKeyDown: Function.prototype,
  tabIndex: ""
}) => {
  const propTypes = useRef({
    x: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    y: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    onKeyDown: propTypes.func,
    tabIndex: propTypes.string
  });
  const defaultProps = useRef({
    onKeyDown: Function.prototype,
    tabIndex: ""
  });
  return <div role="button" onKeyDown={props.onKeyDown} className="Paddle" tabIndex={props.tabIndex} style={{
    width: "15px",
    height: "150px",
    position: "absolute",
    backgroundColor: "#ffffff",
    opacity: "0.7",
    top: `${props.y}px`,
    left: `${props.x}px`
  }}>
           <input type="text" className="paddleInput" />
        </div>;
};
export default NewPaddle1