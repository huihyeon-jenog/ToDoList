const weather = document.querySelector(".js-weather"),
    weatherInputL = weather.querySelector(".js-location"),
    weatherInputT = weather.querySelector(".js-Temperature"),
    API_KEY = "70cecaac6994a5a7fa5ec5b493c62dcf",
    COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(respnse){
        return respnse.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weatherInputL.innerText = place.toUpperCase();
        weatherInputT.innerText =`${temperature}℃`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(positon){
    const latitude = positon.coords.latitude;
    const longitude = positon.coords.longitude;
    const coordsObj = {
        latitud : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoFalse(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFalse);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadCoords);
        getWeather(parsedCoords.latitud, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();