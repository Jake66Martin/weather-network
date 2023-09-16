var cityNameInput = document.querySelector("#cityinput");
var pastCities = document.querySelector("#cityList");
var presentForecast = document.querySelector("#presentWeather");
var futureWeather = document.querySelector("#fiveDayForecast");
var button = document.querySelector("#subBtn");


// fetch("http://api.openweathermap.org/geo/1.0/direct?q=Ottawa&limit=1&appid=bcc95f0b5af8c8ab3213f526460e43cb")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })


button.addEventListener("click", function() {

fetch("http://api.openweathermap.org/data/2.5/forecast?lat=45.41&lon=-75.69&appid=bcc95f0b5af8c8ab3213f526460e43cb")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
})




