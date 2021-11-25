const date = new Date();
let banner = document.getElementById("banner");
let day = date.getDay();

if (day == 6) {
    banner.style.display = 'block';
} else {
    banner.style.display = 'none';
}