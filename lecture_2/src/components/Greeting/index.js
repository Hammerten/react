import React from "react";
import Greeting from "./Greeting";
import Header from "./Header";

function Main(props) {
  return (
    <div>
      <Header text={0} />
      <Greeting />
    </div>
  );
}

export default Main;
