const Input = require("prompt-input");

const currentYear = new Date().getFullYear();

export const input = new Input({
  message: "Vilket år föddes du?",
  validate: (answers: number) =>
    answers > currentYear ? "Skriv in giltigt år" : true,
});

input.ask(function (answers: number) {
  const age = currentYear - answers;
  console.log(age);
});
