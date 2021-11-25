const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0) + "°F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('wind-speed').textContent = jsObject.wind.speed.toFixed(0) + "MPH";
    
    const temp = parseFloat(document.querySelector('#current-temp').textContent);
    const wind = parseFloat(document.querySelector('#wind-speed').textContent);

      if (temp <= 50 && wind > 3) {
      const windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16);
      document.querySelector("#wind-chill").textContent = windchill.toFixed(1);
      } else {
      const windChillDescriptor = "N/A";
      document.querySelector("#wind-chill").textContent =
        windChillDescriptor;
    }
  
  
  
  });

