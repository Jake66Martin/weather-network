var cityNameInput = document.querySelector("#cityinput");
var pastCities = document.querySelector("#cityList");
var presentForecast = document.querySelector("#presentWeather");
var futureWeather = document.querySelector("#fiveDayForecast");
var button = document.querySelector("#subBtn");
var date = dayjs().format('(MM/DD/YYYY)')


button.addEventListener("click", function(event) {

event.preventDefault();

var cityname = cityNameInput.value.trim();


if (cityname) {
    fetchWeather(cityname);

    cityNameInput.value = ""

} else {
    alert("Please enter a valid city name.")
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
        renderContent(data, city)
        console.log(data)
      })

    console.log(data)
})};

var renderContent = function (data) {
    var buttons = document.createElement("button")
    buttons.textContent = data.city.name
    buttons.setAttribute("style", "display: block; width: 100%; margin: 5px;")
    pastCities.appendChild(buttons)
   

    presentForecast.textContent = "";
    var heading = document.createElement("h2")
    heading.textContent = data.city.name + " " + date + " " + data.list[0].weather[0].icon
    heading.setAttribute("style", "align-text: center;")
    presentForecast.appendChild(heading)




}






