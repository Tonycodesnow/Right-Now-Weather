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
function getUVI(id, cityLat, cityLong) {
    var uvURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${cityLat}&lon=${cityLong}&appid=${id}`;

    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function (data) {
        $(".cityToday").append(`<p>UV Index: <span class="badge badge-danger p-2">${data.value}</span></p>`);
    })
}

// api function for city




// 5 day forecast for current city




//Using google autocomplete API
let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("inputCity"),
    {
      types: ["(cities)"],
      componentRestrictions: {
        country: "us",
      },
    }
  );
  autocomplete.addListener("place_changed", onCityChanged);
}
