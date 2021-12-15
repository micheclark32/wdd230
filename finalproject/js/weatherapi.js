const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5803990&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('p-description').innerHTML = jsObject.weather[0].description;
    document.getElementById('p-current-temp').innerHTML = jsObject.main.temp.toFixed(0) + "°F";
    document.getElementById('p-humidity').innerHTML = jsObject.main.humidity + "%";
    
  
  });



  
