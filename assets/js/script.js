const root = document.querySelector(":root");

const hours_hand = document.getElementById("h_hand");
const minutes_hand = document.getElementById("m_hand");
const seconds_hand = document.getElementById("s_hand");

const hour_view = document.getElementById("hour_view");
const minute_view = document.getElementById("minute_view");
const seconds_view = document.getElementById("seconds_view");

const theme = document.getElementById("theme");
const theme_icon = document.getElementById("theme_icon");

let dark = false;


setInterval(setTime, 1000);

function setTime () {
  const date = new Date();

  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  defineRotation(hours_hand, hours * 360);
  defineRotation(minutes_hand, minutes * 360);
  defineRotation(seconds_hand, seconds * 360);

  defineTime(hour_view, date.getHours());
  defineTime(minute_view, date.getMinutes());
  defineTime(seconds_view, date.getSeconds());
}

function defineRotation (element, time) {
  element.style.setProperty("--rotation", time + "deg");
}

function defineTime (element, time) {
  element.innerHTML = (time < 10 ? "0" : "") + time; 
}

function changeTheme () {
  if (!dark) {
    console.log("teste")
    theme.style.left = "50%";
    theme_icon.innerHTML = "light_mode";
    dark = true;
    root.classList.add("dark");
  } else {
    theme.style.left = "0";
    theme_icon.innerHTML = "dark_mode";
    dark = false;
    root.classList.remove("dark");
  }
}

setTime ();