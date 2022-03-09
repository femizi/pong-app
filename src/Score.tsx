import React, { useRef } from 'react';

const Score = (props = {
  total: 0
}) => {
  const propTypes = useRef({
    total: propTypes.number,
    position: propTypes.oneOf(["left", "right"]).isRequired,
    player: propTypes.string.isRequired
  });
  const defaultProps = useRef({
    total: 0
  });
  return <div className={props.position}>
           <h2>Player {props.player}</h2>
           <h2>{props.total}</h2>
        </div>;
};


export default Score