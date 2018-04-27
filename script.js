///////////////////////Weather App V2.0///////////////////////////
// Gets weather info using geolocation

///////////////GEOLOCATION///////////////
// var txtDisplayLatLon = document.querySelector("#data")


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         txtDisplayLatLon.innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude
//     });
//   }
///////////////////////////////////////////

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=`+lat+`&lon=`+lon+`&appid=ba9912bc30525e697d01aaacaa00c2a4`;
    
    $.getJSON(apiCall, weatherCallBack);
   
    function weatherCallBack(weatherData){
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        var celcius = Math.round(weatherData.main.temp) - 273;
        var far = (celcius *1.8)+32;
        $('#data').append("The weather in " + cityName + ", "+ country + " is "+ far +" degrees and "+ description + ".");
        console.log(weatherData);
        } 
    });
};


//////////////Temperature Conversion/////////////////

/// c= k-273

// var celcius = weatherData.main.temp - 273;

// var Far = (celcius *1.8)+32;

























///////////////Weather App V1.0///////////////

//App get's city name from form input and displays small amount of info from weather api. 


// function getWeather(){
//     // resets html;
//     $("#data").html('');
//     // Name that went in input
//     var cityName = $('#cityName').val();
//     // api address + var cityName in appropriate place
//     var apiCall = `https://api.openweathermap.org/data/2.5/weather?q=`  + cityName + `&appid=ba9912bc30525e697d01aaacaa00c2a4`;
//     // Api function get's weather data and appends to html forming sentence about weather.
//     $.getJSON(apiCall, weatherCallBack);
   
//     function weatherCallBack(weatherData){
//         var cityName = weatherData.name;
//         var country = weatherData.sys.country;
//         var description = weatherData.weather[0].description;
//         $('#data').append("The weather in " + cityName + ", "+ country + " is "+ description + ".");
//     }
    
//     // console.log(weatherData);
//     // console.log(weatherData.name, weatherData.sys.country, weatherData.weather[0].description);
// } ;

////////////////////////////////////////////////////////////

///////////////GEOLOCATION///////////////
// var txtDisplayLatLon = document.querySelector("#data")


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         txtDisplayLatLon.innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude
//     });
//   }
///////////////////////////////////////////


 