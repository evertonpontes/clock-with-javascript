const hours_hand = document.getElementById("h_hand");
const minutes_hand = document.getElementById("m_hand");
const seconds_hand = document.getElementById("s_hand");

setInterval(setTime, 1000);

function setTime () {
  const date = new Date();

  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  defineRotation(hours_hand, hours * 360);
  defineRotation(minutes_hand, minutes * 360);
  defineRotation(seconds_hand, seconds * 360);
}

function defineRotation (element, time) {
  element.style.setProperty("--rotation", time + "deg");
}