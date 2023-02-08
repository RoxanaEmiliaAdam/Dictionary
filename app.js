"use strict";

// Select elements
const saveBtn = document.getElementById("save");
const searchBtn = document.getElementById("search");
const listContent = document.getElementById("list_content");
let listArr = [];

// SAVE button
saveBtn.addEventListener("click", function () {
  const inputSave = document.getElementById("user_input_save").value;

  let splittedValues = inputSave.split(",");

  for (let i = 0; i < splittedValues.length; i++) {
    listArr.push(splittedValues[i].toLowerCase());
  }

  listContent.textContent = listArr.sort().join(", ");
});

// SEARCH button
searchBtn.addEventListener("click", function () {
  const inputSearch = document.getElementById("user_input_search").value;
  listArr.includes(inputSearch.toLowerCase())
    ? alert("This word is already in the list.")
    : alert("This word is not in the list yet.");
});
