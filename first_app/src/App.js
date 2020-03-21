import React from "react";
import logo from "./logo.svg";
import Counter from "./presentation/Counter/Counter";
import Message from "./presentation/Message/Message";
import "./App.css";
import CounterHook from "./presentation/CounterHook/CounterHook";

function App() {
  return (
    <div>
      <Counter />
      <CounterHook initial={100} />
      <Message />
    </div>
  );
}

export default App;
