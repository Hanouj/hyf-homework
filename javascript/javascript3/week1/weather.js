//Weather app
document.addEventListener("DOMContentLoaded", fetchweather);

function fetchweather() {
  const weatherButton = document.getElementById("searchBtn");
  weatherButton.addEventListener("click", (ev) => {
    ev.preventDefault(); // to stop the page reload

    let inputCity = document.getElementById("city-input");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value.trim()}&units=metric&appid=750dcc6f8327e6cb1989916cbe0c8c7b`
    )
      .then((response) => response.json())
      .then((weather) => {
        if (inputCity.value == "" || !inputCity.value.length) {
          const errorp = document.getElementById("error-p");
          errorp.innerText = "Type a city name first";
          console.log("error type a city name first");
        } else {
          const cityName = weather.name;
          const temp = weather.main.temp;
          const icon = weather.weather[0].icon;
          const windSpeed = weather.wind.speed;
          const cloudDescription = weather.weather[0].description;
          const humidity = weather.main.humidity;
          const sunrise = weather.sys.sunrise;
          const sunset = weather.sys.sunset;

          console.log(
            cityName,
            temp,
            icon,
            windSpeed,
            cloudDescription,
            sunrise,
            sunset,
            humidity
          );
          document.querySelector(".city").innerText = "Weather in " + cityName;
          document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
          document.querySelector(".description").innerText = cloudDescription;
          document.querySelector(".temp").innerText = temp + "°";
          document.querySelector(".sunrise").innerText =
            "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString("dk");
          document.querySelector(".sunset").innerText =
            "Sunset: " + new Date(sunset * 1000).toLocaleTimeString("dk");
          document.querySelector(".wind").innerText =
            "Wind speed: " + windSpeed + "km/h";
          document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
          document.querySelector(".weather").classList.remove("loading");
        }
      });
  });
}
