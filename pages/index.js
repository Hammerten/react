import React from "react";
import CovidApi from "../src/containers/CovidApi";
import Header from "../src/components/Header/Header";

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
