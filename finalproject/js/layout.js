let cards = document.getElementById('box');
let names = document.getElementById('name');
let image = document.getElementById('logo');
let web = document.getElementById('webadd');
let phone = document.getElementById('phone_n');


function listView() {
    document.querySelector('.cards').style.gridTemplateColumns = '1fr';

    for (i=0; i < cards.length; i++) {
        cards[i].style.display = 'grid';
        cards[i].style.gridTemplateColumns = '1fr 1fr';
        cards[i].style.gridTemplateRows = '1fr';
        cards[i].style.alignItems = 'center';
        cards[i].style.padding = '1em';
        image[i].style.gridColumns = '1/2';
        image[i].style.gridRow = '1/5';
        names[i].style.gridColumn = '2/3';
        names[i].style.gridRow = '1/2';
        web[i].style.gridColumn = '2/3';
        web[i].style.gridRow = '2/3';
        phone[i].style.gridColumn = '2/3';
        phone[i].style.gridRow = '4/5';
    }
}

function gridView() {
    location.reload();
}