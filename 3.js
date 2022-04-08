"use strict";

const formData = {
  name: "myForm",
  fieldset: [
    {
      tagName: "select",
      name: "cars",
      id: "cars",
      label: "Choose a car:",
      options: ["Volvo", "Saab", "Honda", "Toyota", "Audi"],
    },
    {
      tagName: "input",
      type: "text",
      label: "First name",
      id: "fname",
      name: "fname",
    },
    {
      tagName: "input",
      type: "radio",
      label: "Male",
      id: "male",
      name: "gender",
      value: "male",
    },
    {
      tagName: "input",
      type: "radio",
      label: "Female",
      id: "female",
      name: "gender",
      value: "female",
    },
    {
      tagName: "button",
      type: "submit",
    },
  ],
};

const container = document.querySelector(".container");

let strForm = "";

const renderForm = () => {
  container.insertAdjacentHTML(
    "beforeend",
    `<form name=${formData.name}>${strForm}</form>`
  );
};

const insideForm = (arr) => {
  for (const formItem of arr) {
    switch (formItem.tagName) {
      case "select":
        combine(getSelect(formItem));
        break;
      case "input":
        combine(getInput(formItem));
        break;
      case "button":
        combine(getButton(formItem));
        break;
      default:
        console.log(formItem);
    }
  }
};

const combine = (str) => {
  strForm = `${strForm}${str}`;
};

const getSelect = (obj) => {
  let strOptions = ``;
  for (const option of obj.options) {
    strOptions = `${strOptions}<option value=${option}>${option}</option>`;
  }
  return `<label>${obj.label}</label><select name=${obj.name} id=${obj.id}>${strOptions}</select>`;
};

const getInput = (obj) => {
  if (obj.type === "text") {
    return `<label>${obj.label}</label><input type=${obj.type} id=${obj.id} name=${obj.name}>`;
  } else if (obj.type === "radio") {
    return `<label>${obj.label}</label> <input type=${obj.type} id=${obj.id} name=${obj.name} value=${obj.value}>`;
  }
};

const getButton = (obj) => `<Button type=${obj.type}>${obj.type}</Button>`;

insideForm(formData.fieldset);
renderForm();
