const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "54390859fbd034e9b937bf8fd7714f57"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}/${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't find you. no weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);