var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentyear").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();

var yearoptions = {year: "numeric"}
document.querySelector("currentyear").textContent = new Date().toLocaleDateString("en-US", yearoptions)