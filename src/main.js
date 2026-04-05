import { saveData, getData } from './filesystem.js';

const btnCount = document.getElementById("btn-count");
const btnSave = document.getElementById("btn-save");
const btnShow = document.getElementById("btn-show");
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello from main.js");
  btnCount.addEventListener("click", onCountClick);
  btnSave.addEventListener("click", onSaveClick);
  btnShow.addEventListener("click", onShowClick);
});

function onCountClick() {
  console.log("btn-count clicked");

  count++;
  btnCount.textContent = `Счет: ${count}`;
  console.log(`Счет: ${count}`);
}

function onSaveClick() {
  console.log("btn-save clicked");

  // Запросить у пользователя текст
  const userInput = prompt("Введите текст:");
  console.log(`userInput: ${userInput}`);
  
  // Проверяем, что пользователь что-то ввёл
  if (userInput !== null) {
    saveData("default", userInput)
  }
}

function onShowClick() {
  console.log("btn-show clicked");

  getData("default").then(text => {
    console.log(`getData text: ${text}`);
    alert(text);
  });
}