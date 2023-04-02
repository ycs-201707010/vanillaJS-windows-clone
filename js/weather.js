const API_KEY = "b650d13b6a4e706a005d3e6a3bda3cab";

/** div와 그 안에 들어갈 태그를 여기서 정의  */
const weather = document.querySelector(".weather");
const span = document.createElement("span");
span.classList.add("weather-component");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(`you live in ${lat}, ${lon}`);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.createElement("img");
      const iconIndex = data.weather[0].icon;

      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${iconIndex}.png`
      );

      span.innerText = `${data.name} / ${Math.floor(data.main.temp)}ºC ${
        data.weather[0].main
      }`;

      // console.log(url); // 테스트용
      weather.appendChild(icon);
      weather.appendChild(span);
    });
}

function onGeoError() {
  span.innerText = `Not Available`;
  weather.appendChild(span);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
