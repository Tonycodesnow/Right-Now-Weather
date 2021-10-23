$(document).ready(function(){



const apiKey = "5ebc62dbb075ae790774030d6f65bde8"
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var units = "&units=imperial"
console.log("hello")
var cities = []
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


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
      // console.log(data.value);
        $(".cityToday").append(`<p>UV Index: <span class="badge badge-danger p-2">${data.value}</span></p>`);
    })
}

// api function for city

// function for current weather

let iconcode;
let iconurl;
let iconid = [];
iconid.push(
  ''
);
iconid.push(
  ''
);
iconid.push(
  ''
);
iconid.push(
  ''
);
iconid.push(
  ''
);
iconid.push(
  ''
);
// 5 day forecast for current city
function fiveDay(citylat, citylong) {
  var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${citylat}&lon=${citylong}&appid=${apiKey}&units=imperial`;
  $.ajax({
      url: url2,
      method: "GET"
  }).then(function (data) {
    console.log('daily', data.daily)
    $(".forecast").html('');
    for (let i = 1; i <= 5; i++) {
      // for loop dynamically 
      iconcode = data.daily[i].weather[0].icon;
      console.log(iconcode);
      // http://openweathermap.org/img/wn/10d@2x.png
      iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
      iconid[i]= 'wicon' + i;
      console.log(iconurl)
      $(".forecast").html( $('.forecast').html()+
        `<div class="card text-white shadow bg-primary" style="max-width: 14rem;">
        <div class="card-header">${''}</div>
        <div class="card-body">
        <div id="icon"><img id=${iconid[i]} src='' alt="Weather icon"></div>
        <p class="card-text">Temp: ${data.daily[i].temp.day}</p>
        <p class="card-text">Wind: ${data.daily[i].wind_speed}</p>
        <p class="card-text">Humidity: ${data.daily[i].humidity}</p>
        </div>
        </div>`
        );
        console.log(iconid[i])
        console.log(iconurl);
        $(`${iconid[i]}`).attr('src', iconurl);
      }
    })
  }


document.querySelector("#city-Button").addEventListener("click", citySearch);
});