const apiKey = "5ebc62dbb075ae790774030d6f65bde8"
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=imperial"
console.log("hello")
var cities = []

// function for city search
function citySearch(event) {
    event.preventDefault()
    var cityName = $("#citySearchInput").val()
    fetch(weatherURL+cityName+"&apiKey="+apiKey).then(function(res){
      return res.json()
    }).then(function(data){
      console.log(data)
      fiveDay(data.coord.lat,data.coord.lon)
    })
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

// function for current weather


// 5 day forecast for current city
function fiveDay(citylat, citylong) {
  var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${citylat}&lon=${citylong}&appid=${apiKey}&units=imperial`;
  $.ajax({
      url: url2,
      method: "GET"
  }).then(function (data) {
    for (let i = 1; i <= 5; i++) {

      // for loop dynamically 
      console.log(data)
      $(".forecast").html( $('.forecast').html()+
        `<div class="card text-white bg-primary" style="max-width: 14rem;">
        <div class="card-header">${''}</div>
        <div class="card-body">
        <h5 class="card-title">${''}</h5>
        <p class="card-text">${data.daily[i].temp.day}</p>
        </div>
        </div>`
        )
    }
  })
}


document.querySelector("#city-Button").addEventListener("click", citySearch);
// take a look at dot notation take the info im getting from the api and have the things i need from the object

// pick out the time from the array



// Using google autocomplete API
// let autocomplete;

// function initAutocomplete() {
//   autocomplete = new google.maps.places.Autocomplete(
//     document.getElementById("inputCity"),
//     {
//       types: ["(cities)"],
//       componentRestrictions: {
//         country: "us",
//       },
//     }
//   );
//   autocomplete.addListener("place_changed", onCityChanged);
// }