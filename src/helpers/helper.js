function getColumns() {
  const columns = [
    [
      {
        name: "Country",
        selector: "country",
        sortable: true,
      },
      {
        name: "Total Cases",
        selector: "cases",
        sortable: true,
      },
      {
        name: "New Cases",
        selector: "todayCases",
        sortable: true,
      },
      {
        name: "Total Deaths",
        selector: "deaths",
        sortable: true,
      },
      {
        name: "New Deaths",
        selector: "todayDeaths",
        sortable: true,
      },
      {
        name: "Recovered",
        selector: "recovered",
        sortable: true,
      },
    ],
    [
      {
        name: "Country",
        selector: "country",
        sortable: true,
      },
      {
        name: "Total Cases",
        selector: "cases",
        sortable: true,
      },
      {
        name: "New Cases",
        selector: "todayCases",
        sortable: true,
      },
      {
        name: "Total Deaths",
        selector: "deaths",
        sortable: true,
      },
      {
        name: "New Deaths",
        selector: "todayDeaths",
        sortable: true,
      },
      {
        name: "Recovered",
        selector: "recovered",
        sortable: true,
      },
    ],
    [
      {
        name: "State",
        selector: "state",
        sortable: true,
      },
      {
        name: "Total Cases",
        selector: "cases",
        sortable: true,
      },
      {
        name: "New Cases",
        selector: "todayCases",
        sortable: true,
      },
      {
        name: "Total Deaths",
        selector: "deaths",
        sortable: true,
      },
      {
        name: "New Deaths",
        selector: "todayDeaths",
        sortable: true,
      },
    ],
    [
      {
        name: "Country",
        selector: "country",
        sortable: true,
      },
      {
        name: "Province",
        selector: "province",
        sortable: true,
      },
      {
        name: "Cases",
        selector: "cases",
        sortable: true,
      },
      {
        name: "Deaths",
        selector: "deaths",
        sortable: true,
      },
      {
        name: "Recovered",
        selector: "recovered",
        sortable: true,
      },
    ],
  ];
  return columns;
}

export { getColumns };
