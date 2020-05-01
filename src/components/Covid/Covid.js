import React, { useEffect, useState } from "react";
import CovidTable from "./CovidTable/CovidTable";
import { getColumns } from "../../helpers/helper";

function Covid({
  covidSummary,
  covidDataByCountry,
  covidDataByStates,
  covidDataByJhucsse,
}) {
  const [covidLimit, setCovidLimit] = useState(20);
  const [covidApiIndex, setCovidApiIndex] = useState(0);
  const [covidSortBy, setCovidSortBy] = useState("cases");
  const [covidCountry, setCovidCountry] = useState("");
  const [newdbc, setnewdbc] = useState([]);

  const columns = getColumns();

  const apiList = [
    covidDataByCountry,
    covidDataByCountry,
    covidDataByStates,
    covidDataByJhucsse,
  ];

  useEffect(() => {
    let newData = covidDataByCountry.slice(0, 20);
    setnewdbc(newData);
    handleSubmit();
  }, [covidApiIndex, covidDataByCountry]);

  function covidLimitHandler(e) {
    setCovidLimit(parseInt(e.target.value));
  }

  function handleSubmit() {
    if (covidApiIndex === 1) {
      let newData = apiList[covidApiIndex].filter(
        (data) => data.country === covidCountry
      );
      setnewdbc(newData);
    } else {
      let newData = apiList[covidApiIndex].sort(
        (a, b) => b[`${covidSortBy}`] - a[`${covidSortBy}`]
      );
      newData = newData.slice(0, covidLimit);
      setnewdbc(newData);
    }
  }

  function covidApiIndexHandler(e) {
    setCovidApiIndex(parseInt(e.target.value));
  }

  function covidSortByHandler(e) {
    setCovidSortBy(e.target.value);
  }

  function covidCountryHandler(e) {
    setCovidCountry(e.target.value);
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div style={{ textAlign: "center" }} className="container">
          <h2 className="font-weight-normal display-4 ">
            CASES: {covidSummary.cases}
          </h2>
          <h2 className="font-weight-normal display-4 text-danger mt-3">
            DEATHS: {covidSummary.deaths}
          </h2>
          <h2 className="font-weight-normal display-4 text-success mt-3">
            RECOVERED: {covidSummary.recovered}
          </h2>
        </div>
      </div>
      <div className="container">
        <div
          style={{ justifyContent: "space-between", display: "flex" }}
          className="mb-3"
        >
          <select
            value={covidApiIndex}
            className="custom-select"
            onChange={covidApiIndexHandler}
          >
            <option value="0">Countries API</option>
            <option value="1">Country API</option>
            <option value="2">US States API</option>
            <option value="3">John HOpkins CSSE API</option>
          </select>
          {covidApiIndex !== 1 && (
            <>
              <input
                value={covidLimit}
                className="form-control"
                type="number"
                placeholder="Maximum results"
                onChange={covidLimitHandler}
              />
              <select
                value={covidSortBy}
                onChange={covidSortByHandler}
                className="custom-select"
              >
                <option value="cases">Sort by cases</option>
                <option value="deaths">Sort by deaths</option>
                <option value="country">Sort by countries</option>
                <option value="recovered">Sort by recovered</option>
                <option value="todayCases">Sort by new cases</option>
                <option value="todayDeaths">Sort by new deaths</option>
              </select>
            </>
          )}
          {covidApiIndex === 1 && (
            <input
              style={{ flexBasis: "60%" }}
              value={covidCountry}
              className="form-control"
              type="text"
              placeholder="Enter country"
              onChange={covidCountryHandler}
            />
          )}
          <button onClick={handleSubmit} type="button" className="btn btn-dark">
            Search
          </button>
        </div>
        <div>
          <CovidTable
            key={`${covidSortBy}-${covidLimit}-${covidApiIndex}`}
            covidSortBy={covidSortBy}
            covidDataByCountry={newdbc}
            columns={columns[covidApiIndex]}
          />
        </div>
      </div>
    </div>
  );
}

export default Covid;
