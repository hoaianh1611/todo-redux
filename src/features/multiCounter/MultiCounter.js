import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, increment, decrement } from "./actions";

function MultiCounter() {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.multiCounter);
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      {counters.map((counter, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <button onClick={() => dispatch(increment(index))}>+</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(decrement(index))}>-</button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
