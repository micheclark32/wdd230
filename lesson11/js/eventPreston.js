const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObj) => {
        console.table(jsonObj);
        const towns = jsonObj["towns"];
        towns.forEach((town) => {
            if (town.name == 'Preston') {
  
                let sectionEvent = document.createElement('section');
                let divContCardEvent = document.createElement('div');
                let events = town.events;
                let allEvents = document.createElement('div');
                
                
                sectionEvent.setAttribute('class', 'card-1');
                sectionEvent.setAttribute('id', 'homepage-box');
                divContCardEvent.setAttribute('class', 'container-2 card-1-2 event-flex');
                
               

                events.forEach(event => {
                    let eventPar = document.createElement('p');
                    eventPar.textContent = event;
                    allEvents.append(eventPar);
                })

                allEvents.setAttribute('class', 'events-name');
                divContCardEvent.append(allEvents);
                sectionEvent.append(divContCardEvent);

                document.querySelector('.events-p').append(sectionEvent)

            }
        });


    })