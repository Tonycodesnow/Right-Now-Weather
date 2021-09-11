const apiKey = "5ebc62dbb075ae790774030d6f65bde8"
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=imperial"

var cities = []
// function for city search
function citySearch() {
    var cityName = $("#citySearchInput").val()
    fetch(weatherURL+cityName+"&apiKey="+apiKey).then.
}

// store city search list to loco storage
function saveSearchCity(city) {
    localStorage.setItem("cities", JSON.stringify(cityList));
}


// gets current weather and uv index 




// api function for city




// 5 day forecast for current city



 