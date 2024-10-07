const Input = require("prompt-input");

const currentYear = new Date().getFullYear();

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
  console.log(month);
  console.log(year);
  const age = currentYear - parseInt(year);
  return age;
}
