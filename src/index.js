// Feature 1

function formatDate(date){
    let dayIndex = date.getDay();
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    let day = days[dayIndex];

    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`; 
    } 

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`; 
    } 
    return `${day}, ${hour}:${minutes}`;
    }

    let timeDisplay = document.querySelector("#current-time");
    let now = new Date();
    
    timeDisplay.innerHTML = formatDate(now);

// Feature 2 + Homework Wk5


function showSearchedTemperature(response){
    let currentTemperature = Math.round(response.data.main.temp);
    let temperatureDisplay = document.querySelector("#current-temperature");
    temperatureDisplay.innerHTML = currentTemperature; 
}

function showSearchedCity (response) {
    let cityInput = document.querySelector("#city-input");
    let city = cityInput.value;
    city.innerHTML = cityInput.value;
}

function getWeatherData (event){
    event.preventDefault();

    let apiKey = "33ab5beffc1f84edf84d559d33e4f095";
    let unit = "metric";
    let cityInput = document.querySelector("#city-input");
    
    let cityDisplay = document.querySelector("#current-city");
    cityDisplay.innerHTML = cityInput.value;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}&appid=${apiKey}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(showSearchedTemperature);
    axios.get(apiUrl).then(showSearchedCity);
}

let cityForm = document.querySelector("#search-city");
cityForm.addEventListener("submit", getWeatherData);




// Feature 3

function convertToCelsius(event){
    let currentTemp = document.querySelector("#current-temperature");
    currentTemp.innerHTML = `66`;
};

function convertToFahrenheit(event){
    let currentTemp = document.querySelector("#current-temperature");
    currentTemp.innerHTML = `19`;
};  

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToCelsius);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToFahrenheit);

//Local City

function retrieveLocalData (position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log(longitude);
    console.log(latitude);

    let apiKey = "33ab5beffc1f84edf84d559d33e4f095";
    let unit = "metric";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(showLocalTemperature);
    axios.get(apiUrl).then(showLocalCity);
}

function showLocalTemperature (response){
    let currentTemperature = Math.round(response.data.main.temp);
    console.log(currentTemperature);
    let temperatureDisplay = document.querySelector("#current-temperature");
    temperatureDisplay.innerHTML = currentTemperature;
}

function showLocalCity (response){
    let location = response.data.name;
    let cityDisplay = document.querySelector("#current-city");
    cityDisplay.innerHTML = location;
}

function getLocalPosition (event){
    navigator.geolocation.getCurrentPosition(retrieveLocalData);
}

let localButton = document.querySelector("#local-temperature-button");
localButton.addEventListener("click", getLocalPosition);
