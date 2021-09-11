const apiKey = "5ebc62dbb075ae790774030d6f65bde8"
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=imperial"

var cities = []
// function for city search
function citySearch() {
    var cityName = $("#citySearchInput").val()
    // fetch(weatherURL+cityName+"&apiKey="+apiKey).then.
}

// store city search list to loco storage
function saveSearchCity(city) {
    localStorage.setItem("cities", JSON.stringify(cityList));
}


// gets current weather and uv index 

var currentWeather = function(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial')
    .then(function(res) {
        return res.json();
    }
    .then(function(data) {

        console.log("current weather: ", data);
        const template = `
        <h2 class="subtitle col-md-6">${data.name} (${new Date().toLocaleDateString()})</h2>
        <i class=icon col-md-4><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/></i>
        
        <ul>
            <li>Temp: ${data.main.temp}</li>
            <li>Wind: ${data.wind.speed}</li>
            <li>Humidity: ${data.main.humidity}</li>
            <li>UV Index</li>
        </ul>
        `

        document.querySelector("#today").innerHTML = template;
    }
};


// api function for city




// 5 day forecast for current city


