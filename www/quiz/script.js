const question1 = document.getElementById("question-1");
const resultField = document.getElementById("result-field");

question1.addEventListener("submit", (event) => {
  const data = new FormData(question1);
  const answerSubmitted = data.get("question-1");
  const correctAnswer = "css";

  const result = answerSubmitted === correctAnswer ? "correct" : "incorrect";

  resultField.innerHTML = `<hr /><p>You were <span class="${result}"><b>${result}!</b></span> The correct answer was: <b>${correctAnswer.toUpperCase()}</b></p>`;

  event.preventDefault();
});
