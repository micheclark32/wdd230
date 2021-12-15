const data = 'json/directory.json';

fetch(data)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    const business = jsonObject['business'];

    
    for (let i = 0; i < business.length; i++) {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let website = document.createElement('a');
      let phone_number = document.createElement('p');
      let image = document.createElement('img');
        
      h2.textContent = business[i].name;
      website.setAttribute('href', business[i].url);
      website.textContent = business[i].url;
      phone_number.textContent = 'Phone: ' + business[i].phone;
      image.setAttribute('src', business[i].imageurl);

      card.setAttribute('id', 'box');
      h2.setAttribute('id', 'name');
      website.setAttribute('id', 'webadd');
      phone_number.setAttribute('id', 'phone_n');
      image.setAttribute('id', 'logo');
      


      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(website);
      card.appendChild(phone_number);
      
        
      document.querySelector('div.cards').appendChild(card);

      }
  
  });