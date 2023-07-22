const imageContainer = document.getElementById("image-container");

const minIndex = 0;
const maxIndex = imageContainer.childElementCount - 1;
let currIndex = Math.floor(imageContainer.childElementCount / 2);

imageContainer.children[currIndex].scrollIntoView();

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", () => {
  rightArrow.removeAttribute("disabled");

  if (currIndex > minIndex) {
    currIndex -= 1;
    imageContainer.children[currIndex].scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  if (currIndex === minIndex) {
    leftArrow.setAttribute("disabled", "true");
  }
});

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", () => {
  leftArrow.removeAttribute("disabled");

  if (currIndex < maxIndex) {
    currIndex += 1;
    imageContainer.children[currIndex].scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  if (currIndex === maxIndex) {
    rightArrow.setAttribute("disabled", "true");
  }
});
