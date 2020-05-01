import React from "react";
import DataTable from "react-data-table-component";

function CovidTable({ covidSortBy, covidDataByCountry, columns }) {
  return (
    <DataTable
      columns={columns}
      data={covidDataByCountry}
      defaultSortField={covidSortBy}
      defaultSortAsc={false}
      noHeader={true}
    />
  );
}

export default CovidTable;
