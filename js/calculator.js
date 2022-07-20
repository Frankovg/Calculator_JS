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

