const imageContainer = document.getElementById("image-container");

const minIndex = 0;
const maxIndex = imageContainer.childElementCount - 1;
let currIndex = Math.floor(imageContainer.childElementCount / 2);

imageContainer.children[currIndex].scrollIntoView();

window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
});

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);

function moveLeft() {
  rightArrow.removeAttribute("disabled");

  if (currIndex > minIndex) {
    currIndex -= 1;
    imageContainer.children[currIndex].scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  if (currIndex === minIndex) {
    leftArrow.setAttribute("disabled", "true");
  }
}

function moveRight() {
  leftArrow.removeAttribute("disabled");

  if (currIndex < maxIndex) {
    currIndex += 1;
    imageContainer.children[currIndex].scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  if (currIndex === maxIndex) {
    rightArrow.setAttribute("disabled", "true");
  }
}
