var cityNameInput = document.querySelector("#cityinput");
var pastCities = document.querySelector("#cityList");
var presentForecast = document.querySelector("#presentWeather");
var futureWeather = document.querySelector("#fiveDayForecast");
var button = document.querySelector("#subBtn");


button.addEventListener("click", function(event) {

event.preventDefault();

var cityname = cityNameInput.value.trim();


if (cityname) {
    fetchWeather(cityname);

    cityNameInput.value = ""

}

});





var fetchWeather = function(city) {

var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=bcc95f0b5af8c8ab3213f526460e43cb";

fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lon = data[0].lon
      var lat = data[0].lat

      var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=bcc95f0b5af8c8ab3213f526460e43cb"

      fetch(weather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.group(data)
      

    
})

    console.log(data)
})};






