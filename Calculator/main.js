var resultObj = {};
var inputElem = document.getElementById("value");

function summ(x, y) {
  return x + y;
}

function getSumm() {
  resultObj.firstValue = +inputElem.value;
  inputElem.value = "";
  resultObj.resultFunc = summ;
}

function getResult() {
  resultObj.secondValue = +inputElem.value;
  var result = resultObj.resultFunc(
    resultObj.firstValue,
    resultObj.secondValue
  );
  inputElem.value = result;

  document.getElementById("result").innerHTML = "Result: " + result;
}
