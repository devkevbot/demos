import words from "./words.js";

const input = document.getElementById("input");
const suggestions = document.getElementById("suggestions");

function removeCurrentSuggestions() {
  suggestions.replaceChildren();
}

function getMatchedWords(userInput) {
  return words.filter((word) => word.toLowerCase().startsWith(userInput)).sort((a, b) => a.localeCompare(b));
}

input.addEventListener("input", () => {
  removeCurrentSuggestions();

  const searchValue = input.value.toLowerCase();
  if (!searchValue) return;

  const matches = getMatchedWords(searchValue);
  if (!matches) return;

  matches.forEach((match) => {
    const suggestion = document.createElement("li");

    suggestion.className = "suggestion";

    suggestion.innerHTML =
      "<b>" + match.substring(0, searchValue.length) + "</b>" + match.substring(searchValue.length);

    suggestion.setAttribute("tabindex", "0");

    suggestion.addEventListener("click", () => {
      input.value = match;
      input.focus();
      removeCurrentSuggestions();
    });

    suggestion.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        input.value = match;
        input.focus();
        removeCurrentSuggestions();
      }
    });

    suggestion.addEventListener("focus", () => {
      suggestion.classList.add("active");
    });

    suggestion.addEventListener("blur", () => {
      suggestion.classList.remove("active");
    });

    suggestions.appendChild(suggestion);
  });
});

input.addEventListener("keyup", (event) => {
  if (event.key === "ArrowDown" && suggestions.childElementCount > 0) {
    suggestions.firstChild.focus();
  }
});

suggestions.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp"].includes(event.key)) {
    event.preventDefault();
  }
});

suggestions.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp" && suggestions.childElementCount > 0 && suggestions.firstChild === event.target) {
    input.focus();
    return;
  }

  if (event.key === "ArrowUp" && suggestions.childElementCount > 0 && suggestions.firstChild !== event.target) {
    event.target.previousSibling?.focus();
    event.target.previousSibling?.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "instant",
    });
    return;
  }

  if (event.key === "ArrowDown" && suggestions.childElementCount > 0 && suggestions.lastChild !== event.target) {
    event.target.nextSibling?.focus();
    event.target.nextSibling?.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "instant",
    });
    return;
  }
});
