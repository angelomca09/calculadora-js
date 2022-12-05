let expressionDiv = document.querySelector(".expression");
let resultDiv = document.querySelector(".result");

function readInput(element) {
  let input = element.innerText;
  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      insertNumber(input);
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      insertOperator(input);
      break;
    case "=":
      equalize();
      break;
    case "C":
      cancel();
      break;
    case "DEL":
      deleteInsertion();
      break;
    case ".":
      insertFloat();
      break;
    case "+/-":
      negative();
      break;
  }
}

function insertNumber(number) {
  console.log("insertNumber: ", number);
  expressionDiv.textContent += number;
}

function insertOperator(operator) {
  console.log("insertOperator: ", operator);
  if (findOperator(expressionDiv.textContent)) {
    const result = calculate();
    cancel();
    insertNumber(result);
    insertResult(result);
  }
  expressionDiv.textContent += ` ${operator} `;
}

function findOperator(expression) {
  if (expression.includes(" + ")) return " + ";
  if (expression.includes(" - ")) return " - ";
  if (expression.includes(" x ")) return " x ";
  if (expression.includes(" / ")) return " / ";
  return "";
}

function calculate() {
  const textExpression = expressionDiv.textContent;
  const operator = findOperator(textExpression);
  if (!operator) return;
  const numbers = textExpression.split(operator).map((n) => +n);
  if (numbers.length != 2) return;
  switch (operator) {
    case " + ":
      return numbers[0] + numbers[1];
    case " - ":
      return numbers[0] - numbers[1];
    case " x ":
      return numbers[0] * numbers[1];
    case " / ":
      return numbers[0] / numbers[1];
  }
}

function insertResult(result) {
  resultDiv.textContent = result;
}

function cancel() {
  expressionDiv.textContent = "";
  resultDiv.textContent = "";
}

function equalize() {
  const result = calculate();
  cancel();
  insertNumber(result);
  insertResult(result);
}

function deleteInsertion() {
  console.log("delete");
  //TODO
}

function insertFloat() {
  console.log("insertFloat");
  //TODO
}

function negative() {
  console.log("negative");
  //TODO
}
