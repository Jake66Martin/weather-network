var cityNameInput = document.querySelector("#cityinput");
var pastCities = document.querySelector("#cityList");
var presentForecast = document.querySelector("#presentWeather");
var tmr = document.querySelector("#tomorrow");
var ftr1 = document.querySelector("#future1");
var ftr2 = document.querySelector("#future2");
var ftr3 = document.querySelector("#future3");
var ftr4 = document.querySelector("#future4");
var button = document.querySelector("#subBtn");
var date = dayjs().format('(MM/DD/YYYY)')

var date1 = dayjs().add(1, "day").format('(MM/DD/YYYY)')
var date2 = dayjs().add(2, "day").format('(MM/DD/YYYY)')
var date3 = dayjs().add(3, "day").format('(MM/DD/YYYY)')
var date4 = dayjs().add(4, "day").format('(MM/DD/YYYY)')
var date5 = dayjs().add(5, "day").format('(MM/DD/YYYY)')


button.addEventListener("click", function(event) {

event.preventDefault();

 cityname = cityNameInput.value.trim();


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
        

      var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=bcc95f0b5af8c8ab3213f526460e43cb"
    


      fetch(weather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        renderPresentContent(data)
        renderFutureContent(data)
        console.log(data)
      })

    console.log(data)
})};

var renderPresentContent = function (data) {
    var pp = document.querySelectorAll("p")
    
    var buttons = document.createElement("button")
    buttons.textContent = data.city.name
    buttons.setAttribute("style", "display: block; width: 100%; margin: 5px;")
    pastCities.appendChild(buttons)

    

    presentForecast.textContent = "";
    var heading = document.createElement("h2")
    var icon = document.createElement("img")
    heading.textContent = data.city.name + " " + date
    icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png")
    presentForecast.appendChild(heading)
    presentForecast.appendChild(icon)

    

    var temp = document.createElement("p")
    temp.textContent = "Temp: " + data.list[0].main.feels_like + " °C"
    presentForecast.appendChild(temp)


    


    var wind = document.createElement("p")
    wind.textContent = "Wind: " + data.list[0].wind.gust + " M/S"
    presentForecast.appendChild(wind)

    

    var humid = document.createElement("p")
    humid.textContent = "Humidity: " + data.list[0].main.humidity + "%"
    presentForecast.appendChild(humid)

    temp.setAttribute("style", "padding: 5px;")
    wind.setAttribute("style", "padding: 5px;")
    humid.setAttribute("style", "padding: 5px;")

    
}

var renderFutureContent = function(data) {

tomorrow.textContent = ""
future1.textContent = ""
future2.textContent = ""
future3.textContent = ""
future4.textContent = ""

var d18 = document.createElement("h2")
d18.textContent = date1
d18.setAttribute("style", "text-align: center;")
tomorrow.appendChild(d18)
var icon1 = document.createElement("img")
icon1.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png")
tomorrow.appendChild(icon1)
var temp1 = document.createElement("p")
temp1.textContent = "Temp: " + data.list[10].main.feels_like + " °C"
tomorrow.appendChild(temp1)

var d19 = document.createElement("h2")
d19.textContent = date2
d19.setAttribute("style", "text-align: center;")
future1.appendChild(d19)
var icon2 = document.createElement("img")
icon2.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png")
future1.appendChild(icon2)
var temp2 = document.createElement("p")
temp2.textContent = "Temp: " + data.list[18].main.feels_like + " °C"
future1.appendChild(temp2)


var d20 = document.createElement("h2")
d20.textContent = date3
d20.setAttribute("style", "text-align: center;")
future2.appendChild(d20)
var icon3 = document.createElement("img")
icon3.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png")
future2.appendChild(icon3)
var temp3 = document.createElement("p")
temp3.textContent = "Temp: " + data.list[26].main.feels_like + " °C"
future2.appendChild(temp3)


var d21 = document.createElement("h2")
d21.textContent = date4
d21.setAttribute("style", "text-align: center;")
future3.appendChild(d21)
var icon4 = document.createElement("img")
icon4.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png")
future3.appendChild(icon4)
var temp4 = document.createElement("p")
temp4.textContent = "Temp: " + data.list[34].main.feels_like + " °C"
future3.appendChild(temp4)


var d22 = document.createElement("h2")
d22.textContent = date5
d22.setAttribute("style", "text-align: center;")
future4.appendChild(d22)
var icon4 = document.createElement("img")
icon4.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[39].weather[0].icon + ".png")
future4.appendChild(icon4)
var temp5 = document.createElement("p")
temp5.textContent = "Temp: " + data.list[39].main.feels_like + " °C"
future4.appendChild(temp5)


}






