const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('p-description').innerHTML = jsObject.weather[0].description;
    document.getElementById('p-current-temp').innerHTML = jsObject.main.temp.toFixed(0) + "°F";
    document.getElementById('p-humidity').innerHTML = jsObject.main.humidity + "%";
    document.getElementById('p-wind-speed').innerHTML = jsObject.wind.speed.toFixed(0) + "MPH";
    
    const temp = parseFloat(document.querySelector('#p-current-temp').textContent);
    const wind = parseFloat(document.querySelector('#p-wind-speed').textContent);

      if (temp <= 50 && wind > 3) {
      const windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16);
      document.querySelector("#p-wind-chill").innerHTML = windchill.toFixed(1);
      } else {
      const windChillDescriptor = "N/A";
      document.querySelector("#p-wind-chill").innerHTML =
        windChillDescriptor;
    }
  
  });

  /***Soda Springs Summary */

  const SapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
  fetch(SapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('s-description').innerHTML = jsObject.weather[0].description;
    document.getElementById('s-current-temp').innerHTML = jsObject.main.temp.toFixed(0) + "°F";
    document.getElementById('s-humidity').innerHTML = jsObject.main.humidity + "%";
    document.getElementById('s-wind-speed').innerHTML = jsObject.wind.speed.toFixed(0) + "MPH";
    
    const temp = parseFloat(document.querySelector('#s-current-temp').textContent);
    const wind = parseFloat(document.querySelector('#s-wind-speed').textContent);

      if (temp <= 50 && wind > 3) {
      const windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16);
      document.querySelector("#s-wind-chill").innerHTML = windchill.toFixed(1);
      } else {
      const windChillDescriptor = "N/A";
      document.querySelector("#s-wind-chill").innerHTML =
        windChillDescriptor;
    }
  
  });

  /***Fish Haven Summary */


  const FapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
  fetch(FapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('f-description').innerHTML = jsObject.weather[0].description;
      document.getElementById('f-current-temp').innerHTML = jsObject.main.temp.toFixed(0) + "°F";
      document.getElementById('f-humidity').innerHTML = jsObject.main.humidity + "%";
      document.getElementById('f-wind-speed').innerHTML = jsObject.wind.speed.toFixed(0) + "MPH";
      
      const temp = parseFloat(document.querySelector('#f-current-temp').textContent);
      const wind = parseFloat(document.querySelector('#f-wind-speed').textContent);
  
        if (temp <= 50 && wind > 3) {
        const windchill =
          35.74 +
          0.6215 * temp -
          35.75 * Math.pow(wind, 0.16) +
          0.4275 * temp * Math.pow(wind, 0.16);
        document.querySelector("#f-wind-chill").innerHTML = windchill.toFixed(1);
        } else {
        const windChillDescriptor = "N/A";
        document.querySelector("#f-wind-chill").innerHTML =
          windChillDescriptor;
      }
    
    });
