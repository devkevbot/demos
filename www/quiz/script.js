/**
 * HTML Elements
 */
const question1 = document.getElementById("question-1");
const answer1 = document.getElementById("answer-1");

const question2 = document.getElementById("question-2");
const answer2 = document.getElementById("answer-2");

const question3 = document.getElementById("question-3");
const answer3 = document.getElementById("answer-3");

const questionElems = [question1, question2, question3];
const answerElem = [answer1, answer2, answer3];

/**
 * Data
 */
const correctAnswers = ["CSS", "HyperText Markup Language", "dynamically"];

questionElems.forEach((question, index) => {
  const position = index + 1;

  question.addEventListener("submit", (event) => {
    const data = new FormData(question);
    const userAnswer = data.get(`question-${position}`);
    const correctAnswer = correctAnswers[index];
    const result = userAnswer === correctAnswer ? "correct" : "incorrect";

    answerElem[index].innerHTML = `
<hr /><p>You were <span class="${result}"><b>${result}!</b></span>
The correct answer was: <b>${correctAnswer}</b></p>`;

    event.preventDefault();
  });
});
