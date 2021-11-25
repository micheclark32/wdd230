const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e85fab00cec86afdaf861396b3d914f1";
fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let list = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
  
  for (let day = 0; day <= 4; day ++) {
      let date = new Date(list[day].dt_txt);
      document.getElementById(`day${day+1}`).textContent = dayOfWeek[date.getDay()];
      document.getElementById(`temp${day+1}`).textContent = list[day].main.temp + "°F";

      const imgAlt = list[day].weather[0].description;
      const imageSrc = 'https://openweathermap.org/img/wn/' + list[day].weather[0].icon + '@2x.png';
      document.getElementById(`icon${day+1}`).setAttribute('src', imageSrc);
      document.getElementById(`icon${day+1}`).setAttribute('alt', imgAlt);
  }




  });