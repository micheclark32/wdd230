let localStorage = window.localStorage;
let today = new Date();
let lastVisit = localStorage.getItem('lastVisit');
let result;


if(lastVisit == null) {
    result = "This is your first time on the gallery page.";
    document.getElementById('visitDate').innerHTML = result;
    localStorage.setItem('lastVisit', new Date());
} else {
    visitedLast();
}

function visitedLast() {
    let date = new Date(localStorage.getItem('lastVisit'));
    let oneDay = 1000 * 60 * 60 * 24;
    let dateTime = today.getTime() - date.getTime();
    result = Math.round(dateTime / oneDay);
    document.getElementById("visitDate").innerHTML = result +  " days since your last visit to Gallery Page.";

    localStorage.removeItem('lastVisit');
    localStorage.clear('lastVisit');
    localStorage.setItem('lastVisit', new Date());
    lastVisit = localStorage.getItem('lastVisit');
}
