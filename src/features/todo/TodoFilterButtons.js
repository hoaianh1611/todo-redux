import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./actions";

function TodoFilterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>SHOW ALL</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        SHOW COMPLETED
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        SHOW ACTIVE
      </button>
    </div>
  );
}

export default TodoFilterButtons;
