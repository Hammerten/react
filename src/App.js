import React from "react";
import "./App.css";
import CovidApi from "./containers/CovidApi";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header
        githubUser="https://github.com/Hammerten"
        navTitle="Covid"
        apiUrl="https://corona.lmao.ninja/"
      />
      <CovidApi />
    </div>
  );
}

export default App;
