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
      calculate();
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
  //TODO
}

function insertOperator(operator) {
  console.log("insertOperator: ", operator);
  //TODO
}

function calculate() {
  console.log("calculate");
  //TODO
}

function cancel() {
  console.log("cancel");
  //TODO
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
