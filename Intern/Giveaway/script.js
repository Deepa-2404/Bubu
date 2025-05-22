let endDate = new Date("May 31, 2025 11:30:00").getTime();

function updateCountdown() {
  let now = new Date().getTime();
  let gap = endDate - now;

  if (gap <= 0) {
    document.body.innerHTML = "<h1>Giveaway Ended</h1>";
    return;
  }

  let days = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((gap / (1000 * 60)) % 60);
  let seconds = Math.floor((gap / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
