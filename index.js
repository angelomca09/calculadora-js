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
      insertOperator(` ${input} `);
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
  expressionDiv.textContent += number;
}

function insertOperator(operator) {
  const textExpression = expressionDiv.textContent;
  if (textExpression === "") return;
  const prevOperator = findOperator(textExpression);
  if (prevOperator) {
    const numbers = textExpression.split(prevOperator);
    if (numbers.length != 2 || numbers.some((n) => n === "")) {
      expressionDiv.textContent = textExpression.replace(
        prevOperator,
        operator
      );
      return;
    }

    equalize();
  }
  expressionDiv.textContent += `${operator}`;
}

function findOperator(expression) {
  if (expression.includes(" + ")) return " + ";
  if (expression.includes(" - ")) return " - ";
  if (expression.includes(" x ")) return " x ";
  if (expression.includes(" / ")) return " / ";
  return undefined;
}

function calculate() {
  const textExpression = expressionDiv.textContent;
  const operator = findOperator(textExpression);
  if (!operator) return;
  const numbers = textExpression.split(operator);
  if (numbers.length != 2 || numbers.some((n) => n === "")) return;
  switch (operator) {
    case " + ":
      return +numbers[0] + +numbers[1];
    case " - ":
      return +numbers[0] - +numbers[1];
    case " x ":
      return +numbers[0] * +numbers[1];
    case " / ":
      return +numbers[0] / +numbers[1];
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
  if (result === undefined) return;
  cancel();
  insertNumber(result);
  insertResult(result);
}

function deleteInsertion() {
  const text = expressionDiv.textContent;
  const lastIndex = text.length - 1;
  if (text.charAt(lastIndex) === " ") {
    expressionDiv.textContent = text.slice(0, lastIndex - 2);
  } else {
    expressionDiv.textContent = text.slice(0, lastIndex);
  }
}

function insertFloat() {
  const textExpression = expressionDiv.textContent;
  const operator = findOperator(textExpression);
  const numbers = textExpression.split(operator);
  if (textExpression === "" || numbers.some((n) => n === "")) {
    expressionDiv.textContent += "0.";
    return;
  }
  const numInd = numbers.length - 1;
  if (numbers[numInd].includes(".")) return;
  expressionDiv.textContent += ".";
}

function negative() {
  console.log("negative");
  //TODO
}
