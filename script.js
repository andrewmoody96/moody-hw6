var weather = "https://api.openweathermap.org/data/2.5/";
var myAPIkey = "&appid=b6bfa2d9ac7526c984b682b61470a65d";

function getWeather() {
  console.log("Fetching weather data...");
  fetch(weather + myAPIkey)
  .then(function (response) {
    console.log("fetched");
    return response.json();
  });
}
