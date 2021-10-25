var d = new Date();
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentyear").innerHTML = week[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

var yearoptions = {year: "numeric"}
document.querySelector("currentyear") == new Date().toLocaleDateString("en-US", yearoptions);