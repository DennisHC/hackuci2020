const KELVIN = 273;
const key = "ed77a5e67d28c33696b023f0a8d41950";
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const notificationElement = document.querySelector(".notification");
const locationElement = document.querySelector(".location p"); 
const switchElement = document.querySelector(".switch");
const weather = {
    unit: "celcius"
};
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.indexHTML = "Error";
}
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML= `<p> ${error.message} </p>`;
}
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);
    fetch(api).
        then(function(response){
            let data = response.json(); 
            return data;
        })
        .then(function(data){
            weather.temperatureValue = Math.floor(data.main.temp - KELVIN);
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.description = data.weather[0].description;
        })
        .then(function(){
            displayWeather();
        });
}
function displayWeather(){
    tempElement.innerHTML = `${weather.temperatureValue}°C`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
switchElement.addEventListener("click", function(){
    if (weather.unit == "celcius"){
        let f = Math.floor(changeToF(weather.temperatureValue));
        tempElement.innerHTML = `${f}°F`;
        weather.unit = "f";
    }
    else{
        tempElement.innerHTML = `${weather.temperatureValue}°C`;
        weather.unit = "celcius";
    }
});
function changeToF(temp){
    return (temp * 9/5) + 32;
}