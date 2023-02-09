"use strict";

// Select elements
const saveBtn = document.getElementById("save");
const searchBtn = document.getElementById("search");
const listContent = document.getElementById("list_content");
let listArr = [];

// SAVE button
saveBtn.addEventListener("click", function () {
  const inputSave = document.getElementById("user_input_save").value;

  const splittedValues = inputSave.split(",");

  for (let i = 0; i < splittedValues.length; i++) {
    const value = splittedValues[i].toLowerCase();
    if (!listArr.includes(value)) {
      listArr.push(value);
    } else {
      alert(`This word "${value}" is already in the list.`);
    }
  }

  listContent.textContent = listArr.sort().join(", ");
});

// SEARCH button
searchBtn.addEventListener("click", function () {
  const inputSearch = document
    .getElementById("user_input_search")
    .value.toLowerCase();

  listArr.includes(inputSearch)
    ? alert(`This word "${inputSearch}" is already in the list.`)
    : alert(`This word "${inputSearch}" is not in the list yet.`);
});
