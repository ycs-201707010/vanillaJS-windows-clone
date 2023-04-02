const times = document.querySelector("div.clock span:first-child");
const day = document.querySelector("div.clock span:last-child");

function getClock() {
  /** 시, 분, 초 등을 불러옴 */
  const today = new Date();
  const hours = String(today.getHours());
  const minutes = String(today.getMinutes()).padStart(2, "0");

  /** year, month, days 등 날짜를 불러옴 */
  const year = String(today.getUTCFullYear());
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");

  if (hours >= 12) {
    times.innerText = `${hours % 12}:${minutes} PM`;
  } else {
    times.innerText = `${hours}:${minutes} AM`;
  }

  day.innerText = `${year}-${month}-${date}`;
}

getClock();
setInterval(getClock, 1000);
