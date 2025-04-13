import React, { useReducer } from "react";
import "./index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter-container">
      <p className="counter-value">Count: {count}</p>
      <div className="counter-buttons">
        <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
