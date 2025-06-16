let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("time").innerHTML = timeToString(elapsedTime);
  }, 1000);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("time").innerHTML = "00:00:00";
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
