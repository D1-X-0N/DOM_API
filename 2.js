"use strict";

const tableData = [
  ["Item 1.1", "Item 1.2", "Item 1.3"],
  ["Item 2.1", "Item 2.2", "Item 2.3"],
  ["Item 3.1", "Item 3.2", "Item 3.3"],
  ["Item 4.1", "Item 4.3"],
  ["Item 5.1", "Item 5.2", "Item 5.3"],
];

const container = document.querySelector(".container");

const renderTable = (arr) => {
  let strRow = ``;
  let strTable = ``;

  for (const row of arr) {
    for (const cell of row) {
      strRow = `${strRow}<td>${cell}</td>`;
    }
    strTable = `${strTable}<tr>${strRow}</tr>`;
    strRow = "";
  }
  container.insertAdjacentHTML("beforeend", `<table>${strTable}</table>`);
};

renderTable(tableData);
