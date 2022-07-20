let addToScreen = (symbol) => {
  document.getElementById("screen").value += symbol;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let operation = document.getElementById("screen").value;
  let res = "E";

  let operatorPos = getOperatorPosition(operation);

  if (operatorPos != -1) {
    let operator = operation[operatorPos];

    let param1 = operation.substring(0, operatorPos);
    let param2 = operation.substring(operatorPos + 1, operation.length);

    //si da falso no se ejecuta y res queda en error
    if (
      validateParameter(param1) &&
      validateParameter(param2) &&
      !checkThirdParameter(param2) &&
      !checkDoubleSymbols(param2)
    ) {
      res = operate(operator, param1, param2);
    }
  }

  document.getElementById("screen").value = res;
};

let validateParameter = (param) => {
  let paramOk = true;

  if (param[0] == "*" || param[0] == "/") {
    paramOk = false;
  }

  return paramOk;
};

let checkThirdParameter = (param) => {
  let hasThirdParameter = false;

  for (let i = 0; i < param.length && !hasThirdParameter; i++) {
    if (
      param[i] != undefined &&
      param[i + 1] != undefined &&
      isNaN(param[i]) == false &&
      isNaN(param[i + 1]) == true
    ) {
      hasThirdParameter = true;
    }
  }

  return hasThirdParameter;
};

let checkDoubleSymbols = (param) => {
  let doubleSymbol = false;

  for (let i = 0; i < param.lenght && !doubleSymbol; i++) {
    if (
      param[i] != undefined &&
      param[i + 1] != undefined &&
      isNaN(param[i]) == true &&
      isNaN(param[i + 1]) == true
    ) {
      doubleSymbol = true;
    }
  }

  return doubleSymbol;
};

let operate = (operator, param1, param2) => {
  let res = "E";

  switch (operator) {
    case "+":
      res = parseInt(param1) + parseInt(param2);
      break;
    case "-":
      res = parseInt(param1) - parseInt(param2);
      break;
    case "*":
      res = parseInt(param1) * parseInt(param2);
      break;
    case "/":
      res = parseInt(param1) / parseInt(param2);
      break;
  }

  return res;
};

let getOperatorPosition = (operation) => {
  let operatorPos = -1;

  // encontrar primer símbolo numérico después de uno numérico
  for (let i = 0; i < operation.length && operatorPos == -1; i++) {
    if (
      operation[i] != undefined &&
      operation[i + 1] != undefined &&
      isNaN(operation[i]) == false &&
      isNaN(operation[i + 1]) == true
    ) {
      operatorPos = i + 1;
    }
  }
  return operatorPos;
};

/*
// SOLUCION CON EVAL() = CACA;
let calculate = () => {
  let operation = document.getElementById("screen").value;

 
  if (operation == 0) {
    document.getElementById("screen").value = "";
  } else {
    try {
      document.getElementById("screen").value = eval(operation);
    } catch {
      document.getElementById("screen").value = "Error";
    }
  }

  console.log(operation);
};
*/

/*
//CARLOS CON EVAL()***************************************************
let operation = document.getElementById("screen").value;
    let res = 1;

    try {
        res = eval(operation);
    }
    catch(e){
        //console.error(e);
        res = "E";
    }
   
    console.log("Se ha ejecutado una operacion");


    document.getElementById("screen").value = res;
    */

//MI INTENTO FALLIDO
/*
 let num1 = 0;
  let num2 = 0;
  let op = [];

  for (let i = 0; i < operation.length; i++) {
    if (isNaN(operation[i]) == false) {
      num2 += operation[i];
    } else {
      op[0] = operation[i];
      num1 = num2;
      num2 = 0;
    }
  }

  console.log(num1);
  console.log(op);
  console.log(num2);

  let result = "";

  for (let j = 0; j < op.length; j++) {
    if (op[j] == "+") {
      result = parseInt(num1) + parseInt(num2);
    } else if (op[j] == "-") {
      result = parseInt(num1) - parseInt(num2);
    } else if (op[j] == "*") {
      result = parseInt(num1) * parseInt(num2);
    } else if (op[j] == "/") {
      result = parseInt(num1) / parseInt(num2);
    } else {
      result = "ERROR";
    }
  }
  console.log(result);

  document.getElementById("screen").value = "";
  document.getElementById("screen").value += result;
  */
