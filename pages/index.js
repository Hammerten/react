import React from "react";
// import styles from "./App.css";
import CovidApi from "../src/containers/CovidApi";
import Header from "../src/components/Header/Header";
// import App from "./_app";

function MainPage() {
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

export default MainPage;
