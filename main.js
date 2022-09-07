const newYears = "1 Jan 2023";
const secsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const dayEl = document.getElementById("days");

function Countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    
    let totalSeconds = Math.trunc((newYearsDate - currentDate) / 1000);
    let days = Math.floor(totalSeconds / 3600 /24);
    let hours = Math.floor(totalSeconds /3600) %24;
    let minutes = Math.floor(totalSeconds /60) %60;
    let seconds = Math.floor(totalSeconds) %60;
  
    secsEl.innerHTML = seconds;
    minutesEl.innerHTML = minutes;
    hoursEl.innerHTML = hours;
    dayEl.innerHTML = days;

}


Countdown()

setInterval(Countdown, 1000)