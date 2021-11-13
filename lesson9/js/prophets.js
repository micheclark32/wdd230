const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    
    for (let i = 0; i < prophets.length; i++) {

      let card = document.createElement('section');
      //I created the following code based on the code sample above
      let h2 = document.createElement('h2');
      let birth = document.createElement('p');
      let place = document.createElement('p');
      let image = document.createElement('img');
        
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);




      card.appendChild(h2);
      card.appendChild(birth);
      card.appendChild(place);
      card.appendChild(image);
        
      document.querySelector('div.cards').appendChild(card);

      }
  
  });