const Input = require("prompt-input");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentday = new Date().getDay();

export const input = new Input({
  message: "Vilket år föddes du? format: yyyy-mm-dd",
});

input.ask(function (answers: string) {
  const age = calculateAge(answers);
  console.log(age);
});

const MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function calculateAge(number: string) {
  const year = number.split("-")[0];
  const month = number.split("-")[1];
  const day = number.split("-")[2];
  let yourAge = 0;

  let days = parseInt(day) - currentday;

  let daysInMonth = MONTHS[days - 1];

  if (days < 0) {
    days = daysInMonth + days;
  }

  if (parseInt(month) < 0 || parseInt(month) > 12)
    throw new Error("Ogiltigt manad.");
  let test = currentMonth - parseInt(month);

  if (test < 0) {
    test = 12 + test;
  }

  if (currentMonth > parseInt(month)) {
    yourAge = currentYear - parseInt(year);
    return `You are ${yourAge} years, ${test} months and ${day} days old. `;
  }

  if (currentMonth < parseInt(month)) {
    yourAge = currentYear - parseInt(year) - 1;
    return `You are ${yourAge} years, ${test} months and ${day} days old. `;
  }
}
