let inputName = prompt();
var nameElem = document.getElementById("myName");
nameElem.textContent = inputName;

let clockElem = document.getElementById("myClock");
const d = new Date();

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let today = days[d.getDay()];

clockElem.innerHTML =
  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + today;
