let value1 = 0;
let value2 = 0;

const setValue1 = (value) => {
  value1 = value;
  console.log("value1: ", value1);
};

const setValue2 = (value) => {
  value2 = value;
  console.log("value2: ", value2);
};

const onCheckAnswer = () => {
  console.log("value1: ", value1, "value2: ", value2);
  const response = main(value1, value2);
  if (response === 0) {
    showIncorrectAnswerMessage();
  } else if (response === 1) {
    showCorrectAnswerMessage();
  }
};

const showIncorrectAnswerMessage = () => {
  const result = document.getElementById("result");
  result.innerHTML =
  "Que pena, não foi dessa vez.<br>Mas não desista, tente novamente!<button class='closeButton' onclick='closeResult()'>close</button>";
  result.className = "incorrectAnswer";
};

const showCorrectAnswerMessage = () => {
  const result = document.getElementById("result");
  result.innerHTML =
  "Parabéns! Você acertou!<button class='closeButton' onclick='closeResult()'>close</button>";
  result.className = "correctAnswer";
};

const closeResult = () => {
  const result = document.getElementById("result");
  result.className = "hidden";
};

const showHelpText = (id) => {
  const helpText = document.getElementById(id);
  if (helpText.className == "hidden") {
    helpText.className = "helpText";
  } else {
    helpText.className = "hidden";
  }
};