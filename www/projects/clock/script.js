const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function padTimeUnit(unit) {
  return String(unit).padStart(2, "0");
}

function setHoursMinutesSeconds() {
  const now = new Date();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();

  hh = padTimeUnit(hh);
  mm = padTimeUnit(mm);
  ss = padTimeUnit(ss);

  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;

  document.title = `Clock - ${hh}:${mm}:${ss}`;
}

setHoursMinutesSeconds();
setInterval(setHoursMinutesSeconds, 1000);
