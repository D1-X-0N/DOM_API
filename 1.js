"use strict";

const listData = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  ["Item 5.1", "Item 5.2", "Item 5.3"],
  "Item 6",
  "Item 7",
];

const container = document.querySelector(".container");

const addChildNode = (item) =>
  container.insertAdjacentHTML("beforeend", `<p>${item}</p>`);

const renderArray = (arr) => {
  if (!Array.isArray(arr)) {
    addChildNode(arr);
  } else {
    for (const item of arr) {
      renderArray(item);
    }
  }
};

renderArray(listData);
