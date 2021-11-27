const SapiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
fetch(SapiURL2)
.then((response) => response.json())
.then((jsObject) => {
  

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let list = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
  
  for (let day = 0; day <= 4; day ++) {
      let date = new Date(list[day].dt_txt);
      document.getElementById(`s-day${day+1}`).innerHTML = dayOfWeek[date.getDay()];
      document.getElementById(`s-temp${day+1}`).innerHTML = list[day].main.temp + "°F";

      const imgAlt = list[day].weather[0].description;
      const imageSrc = 'https://openweathermap.org/img/wn/' + list[day].weather[0].icon + '@2x.png';
      document.getElementById(`s-icon${day+1}`).setAttribute('src', imageSrc);
      document.getElementById(`s-icon${day+1}`).setAttribute('alt', imgAlt);
  }

  });