var calcObj = {};
var inputElement = document.getElementById("value");
var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var steps = 0;

// CLEAR FUNCTIONS
function clearElement() {
  calcObj.firstValue = +inputElement.value;
  inputElement.value = "";
}
function clearAll() {
  clearElement();
  steps = 0;
  for (var member in calcObj) delete calcObj[member];
  inputElement.setAttribute("placeholder", "0");
}

// SET PLACEHOLDERS AFTER ACTIONS
function setPlaceholder() {
  if (calcObj.currentFunction === Sum) {
    inputElement.setAttribute("placeholder", +calcObj.firstValue + " + ");
  } else if (calcObj.currentFunction === Diff) {
    inputElement.setAttribute("placeholder", +calcObj.firstValue + " - ");
  } else if (calcObj.currentFunction === Div) {
    inputElement.setAttribute("placeholder", +calcObj.firstValue + " / ");
  } else if (calcObj.currentFunction === Mult) {
    inputElement.setAttribute("placeholder", +calcObj.firstValue + " * ");
  }
}

// ENTER VALUES FROM BUTTONS
function getNum(buttonValue) {
  calcObj.secondValue += arr[buttonValue];
  inputElement.value += arr[buttonValue];
}

// OPERATIONAL FUNCTIONS
function Sum(x, y) {
  return x + y;
}
function Diff(x, y) {
  return x - y;
}
function Div(x, y) {
  return x / y;
}
function Mult(x, y) {
  return x * y;
}

// GET OPERATIONAL FUNCTIONS
function calc(char) {
  if (char === "+") {
    calcObj.currentFunction = Sum;
  } else if (char === "-") {
    calcObj.currentFunction = Diff;
  } else if (char === "*") {
    calcObj.currentFunction = Mult;
  } else if (char === "/") {
    calcObj.currentFunction = Div;
  }
  clearElement();
  setPlaceholder();
}

// GET RESULT FUNCTION
function getResult() {
  calcObj.secondValue = +inputElement.value;
  inputElement.value = "";
  var result = calcObj.currentFunction(calcObj.firstValue, calcObj.secondValue);
  // console.log(calcObj.firstValue, calcObj.secondValue);
  clearAll();
  inputElement.value = result;
  inputElement.setAttribute("placeholder", result);
}
