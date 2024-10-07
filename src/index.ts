const Input = require ("prompt-input");


const input = new Input({ 
 namn: "först", 
 message: "Vad heter du?"
})


input.ask( function (answers: any) {
 console.log(answers);
})