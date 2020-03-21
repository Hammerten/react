import React, { useState, useEffect } from "react";
import Message from "../Message/Message";

function CounterHook({ initial = 0 }) {
  const [value, setValue] = useState(initial);

  const countIncrease = e => {
    setValue(value + 1);
  };

  useEffect(() => {
    console.info("Rendering");
  });

  return (
    <div>
      <button onClick={countIncrease}>Increase count </button>
      <hr />
      <Message text={value} />
    </div>
  );
}

export default CounterHook;
