import React, { useEffect, useState } from "react";
import axios from "axios";
import Covid from "../components/Covid/Covid";

function CovidApi() {
  const [covidSummary, setCovidSummary] = useState({});
  const [covidDataByCountry, setCovidDataByCountry] = useState([]);
  const [covidDataByStates, setCovidDataByStates] = useState([]);
  const [covidDataByJhucsse, setCovidDataByJhucsse] = useState([]);

  useEffect(() => {
    axios.get("https://disease.sh/v2/all").then((res) => {
      setCovidSummary(res.data);
    });
    axios.get("https://disease.sh/v2/countries?sort=country").then((res) => {
      setCovidDataByCountry(res.data);
    });
    axios.get("https://disease.sh/v2/states").then((res) => {
      setCovidDataByStates(res.data);
    });
    axios.get("https://disease.sh/v2/jhucsse").then((res) => {
      const newData = res.data.map((data) => {
        data.cases = data.stats.confirmed;
        data.deaths = data.stats.deaths;
        data.recovered = data.stats.recovered;
        return data;
      });
      setCovidDataByJhucsse(newData);
    });
  }, []);

  return (
    <Covid
      covidDataByCountry={covidDataByCountry}
      covidSummary={covidSummary}
      covidDataByStates={covidDataByStates}
      covidDataByJhucsse={covidDataByJhucsse}
    />
  );
}

export default CovidApi;
