const planets = Array.from(document.getElementsByClassName("planet"));
console.log(planets);

let angle = 0;

planets.forEach((item) => {
  item.style.setProperty("--angle", "0deg");
});

const ticksPerSecond = 240;

setInterval(() => {
  angle += Math.floor(360 / ticksPerSecond);
  angle = angle % 360;

  planets.forEach((item) => {
    item.style.setProperty("--angle", `${angle}deg`);
  });
}, 1000 / ticksPerSecond);
