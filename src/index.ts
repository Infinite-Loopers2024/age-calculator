const Input = require("prompt-input");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export const input = new Input({
  message: "Vilket år föddes du? format: yyyy-mm-dd",
});

input.ask(function (answers: string) {
  const age = calculateAge(answers);
  console.log(age);
});

export function calculateAge(number: string) {
  const year = number.split("-")[0];
  const month = number.split("-")[1];
  let yourAge = 0;

   if (parseInt(month) < 0 || parseInt(month) > 12)
     throw new Error("Ogiltigt manad.");
   const test = currentMonth - parseInt(month);

  if (currentMonth > parseInt(month)){
   yourAge = currentYear - parseInt(year);
   return `You are ${yourAge} years and ${test} months old. `;
  }

  if (currentMonth < parseInt(month)){
    yourAge = currentYear - parseInt(year) - 1;
    return (`You are ${yourAge} years and ${test} months old. `)
  }}
