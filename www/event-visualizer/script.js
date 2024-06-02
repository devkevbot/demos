// Capture controls
const outerCapture = document.getElementById("outerCapture");
const innerCapture = document.getElementById("innerCapture");
const buttonCapture = document.getElementById("buttonCapture");
let useOuterCapture = outerCapture.checked;
let useInnerCapture = innerCapture.checked;
let useButtonCapture = buttonCapture.checked;

function handleToggleCaptureOuter() {
  useOuterCapture = outerCapture.checked;
  outer.removeEventListener("click", handleClickOuter, !useOuterCapture);
  outer.addEventListener("click", handleClickOuter, useOuterCapture);
}

function handleToggleCaptureInner() {
  useInnerCapture = innerCapture.checked;
  inner.removeEventListener("click", handleClickInner, !useInnerCapture);
  inner.addEventListener("click", handleClickInner, useInnerCapture);
}

function handleToggleCaptureButton() {
  useButtonCapture = buttonCapture.checked;
  button.removeEventListener("click", handleClickButton, !useButtonCapture);
  button.addEventListener("click", handleClickButton, useButtonCapture);
}

outerCapture.addEventListener("change", handleToggleCaptureOuter);
innerCapture.addEventListener("change", handleToggleCaptureInner);
buttonCapture.addEventListener("change", handleToggleCaptureButton);

// Propagation controls
const outerPropagation = document.getElementById("outerPropagation");
const innerPropagation = document.getElementById("innerPropagation");
const buttonPropagation = document.getElementById("buttonPropagation");
let useOuterPropagation = outerPropagation.checked;
let useInnerPropagation = innerPropagation.checked;
let useButtonPropagation = buttonPropagation.checked;

function handleTogglePropagationOuter() {
  useOuterPropagation = outerPropagation.checked;
  outer.removeEventListener("click", handleClickOuter, useOuterCapture);
  outer.addEventListener("click", handleClickOuter, useOuterCapture);
}

function handleTogglePropagationInner() {
  useInnerPropagation = innerPropagation.checked;
  inner.removeEventListener("click", handleClickInner, useInnerCapture);
  inner.addEventListener("click", handleClickInner, useInnerCapture);
}

function handleTogglePropagationButton() {
  useButtonPropagation = buttonPropagation.checked;
  button.removeEventListener("click", handleClickButton, useButtonCapture);
  button.addEventListener("click", handleClickButton, useButtonCapture);
}

outerPropagation.addEventListener("change", handleTogglePropagationOuter);
innerPropagation.addEventListener("change", handleTogglePropagationInner);
buttonPropagation.addEventListener("change", handleTogglePropagationButton);

const EVENT_PHASE_NUMBERS = Object.freeze({
  CAPTURING: 1,
  TARGET: 2,
  BUBBLING: 3,
});

const EVENT_PHASE_NAMES = Object.freeze({
  1: "CAPTURING",
  2: "TARGET",
  3: "BUBBLING",
});

function eventPhaseToName(eventPhase) {
  return EVENT_PHASE_NAMES[eventPhase];
}

// Demo element click handlers
function handleClickOuter(event) {
  const li = createEventLogItem("outer processed click event", "coral");
  logItems.appendChild(li);

  if (!useOuterPropagation) {
    const li = createEventLogItem(
      `propagation stopped by outer in ${eventPhaseToName(event.eventPhase)} phase`,
      "pink",
      {
        addSeparator: true,
      }
    );
    logItems.appendChild(li);
    event.stopPropagation();
  } else if (event.eventPhase !== EVENT_PHASE_NUMBERS.CAPTURING) {
    const li = createEventLogItem("propagation naturally ended at outer", "yellow", {
      addSeparator: true,
    });
    logItems.appendChild(li);
  }

  logItems.lastChild.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function handleClickInner(event) {
  const li = createEventLogItem("inner processed click event", "skyblue");
  logItems.appendChild(li);

  if (!useInnerPropagation) {
    const li = createEventLogItem(
      `propagation stopped by inner in ${eventPhaseToName(event.eventPhase)} phase`,
      "pink",
      {
        addSeparator: true,
      }
    );
    logItems.appendChild(li);
    event.stopPropagation();
  }

  logItems.lastChild.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function handleClickButton(event) {
  const li = createEventLogItem("button processed click event", "lightgreen");
  logItems.appendChild(li);

  if (!useButtonPropagation) {
    const li = createEventLogItem(
      `propagation stopped by button in ${eventPhaseToName(event.eventPhase)} phase`,
      "pink",
      {
        addSeparator: true,
      }
    );
    logItems.appendChild(li);
    event.stopPropagation();
  }

  logItems.lastChild.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

// Event log
const logItems = document.getElementById("logItems");
const clearEventLogButton = document.getElementById("clearEventLog");

function handleClickClearEventLogButton() {
  logItems.replaceChildren();
}

clearEventLogButton.addEventListener("click", handleClickClearEventLogButton);

function createEventLogItem(innerText, color, { addSeparator = false } = {}) {
  const li = document.createElement("li");
  li.style.fontFamily = "monospace";
  li.style.color = color;
  li.innerText = innerText;
  if (addSeparator) {
    li.style.paddingBottom = "1rem";
    li.style.marginBottom = "1rem";
    li.style.borderBottom = "2px solid white";
    li.style.width = "100%";
  }
  return li;
}

// Demo things to click
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const button = document.getElementById("button");
outer.addEventListener("click", handleClickOuter, useOuterCapture);
inner.addEventListener("click", handleClickInner, useInnerCapture);
button.addEventListener("click", handleClickButton, useButtonCapture);
