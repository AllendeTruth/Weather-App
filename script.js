///////////////API Call///////////////




function getWeather(){
    var cityName = $("#cityName").val();
    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=Fayetteville&appid=ba9912bc30525e697d01aaacaa00c2a4";
    $.getJSON(apiCall, weatherCallBack);
    var cityName = weatherData.name;
    var country = weatherData.sys.country;
    var description = weatherData.weather[0].description;
    $('#data').append(cityName + ", "+ country);
    // console.log(weatherData);
    // console.log(weatherData.name, weatherData.sys.country, weatherData.weather[0].description);
} );



///////////////GEOLOCATION///////////////
var txtDisplayLatLon = document.querySelector("#data")


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         txtDisplayLatLon.innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude
//     });
//   }
///////////////////////////////////////////


 