const apiKey = "5fcdcb357c0feb22e6c036176eb10a4f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status==404){
    document.querySelector(".error").style.display ="block"
     document.querySelector(".weather").style.display = "none";
  }else{
      var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "pic/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "pic/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "pic/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "pic/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "pic/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  }




searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
