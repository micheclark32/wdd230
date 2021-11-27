const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

   
    
    const towns = jsonObject['towns'];

    console.log(towns);

    const townSelection = towns.filter(town => town.averageRainfall < 17);
    

   
   
    townSelection.forEach(town=> { 
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const motto = document.createElement('p');
        const yearFounded = document.createElement('p');
        const currentPopulation = document.createElement('p');
        const averageRainfall = document.createElement('p');
        const photo = document.createElement('img');



        name.textContent = town.name;
        motto.textContent = town.motto;
        yearFounded.textContent =`Year Founded: ${town.yearFounded}`;
        currentPopulation.textContent =`Population: ${town.currentPopulation}`;
        averageRainfall.textContent =`Annual Rain Fall: ${town.averageRainfall}`;
        photo.setAttribute('src', `images/${town.photo}`);
        console.log(town.photo);
        
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);

      document.querySelector('div.townData').appendChild(card);
            
    })
  });