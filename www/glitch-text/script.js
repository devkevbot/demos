const text = document.getElementById("text");
const originalText = text.innerText;
const maxIterations = originalText.length;

const alphabet = "abcdefghijklmnopqrstuv";

let started = false;

text.addEventListener("mouseover", (event) => {
  if (started) {
    return;
  }

  started = true;

  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return originalText[index];
        }

        return alphabet[Math.floor(Math.random() * alphabet.length)];
      })
      .join("");

    if (iterations === maxIterations) {
      clearInterval(interval);
      started = false;
    }

    iterations += 1 / 3;
  }, 30);
});
