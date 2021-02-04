
document.getElementById("search-btn").addEventListener("click", function () {
     let locationName = document.getElementById("input-location").value;
     displayWeather(locationName);
})

displayWeather = (place) => {
     fetch("http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&appid=bad4ca22b01b704d0f3031119644e5b5")
          .then(response => response.json())
          .then(data => {
               // setting the location name
               document.getElementById('location-name').innerText = data.name;
               // setting weather temperature
               document.getElementById('weather-temp').innerText = data.main.temp;
               // settings weather condition
               document.getElementById('weather-condition').innerHTML = data.weather[0].main;
               // setting weather icon
               let icon = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
               document.getElementById('weather-icon').setAttribute('src', icon);

          })
}

// by default weather
displayWeather("Dhaka");
