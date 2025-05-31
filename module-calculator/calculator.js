import {add, subtract, multiply, divide} from "./operations.js"

function calculate(operation, a, b){


  try{
    switch (operation){

    case 'add':
      return add(a, b);

    case 'subtract':
      return subtract(a, b);

    case 'multiply':
      return multiply(a, b);

    case 'divide':
      return divide(a, b);

    default: 
      throw new Error("Enter a valid operation");
    }
  }
  catch(error){
    console.error("Error:",error.message);
    return null;
  }

}

const [_, __, operation, a, b] = process.argv;
const result = calculate(operation, Number(a), Number(b));
console.log(`Result: ${result}`);
