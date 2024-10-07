import { table } from 'console';

const Input = require('prompt-input');

const currentYear = new Date().getFullYear();

const input = new Input({
  namn: 'först',
  message: 'Vilket år föddes du?',
  validate: (answers: number) =>
    answers > currentYear ? 'Skriv in giltigt år' : true,
});

input.ask(function (answers: number) {
  const age = currentYear - answers;
  console.log(age);
});
