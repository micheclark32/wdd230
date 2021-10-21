
   
const temp = document.querySelector("#temp").textContent;
const wind = document.querySelector("#wind").textContent;
let chill = "";
if ((temp <= 50) && (wind > 3)){
  chill = windChill(temp, wind);
}
else {
  chill = `N/A`
}
function windChill(temp, wind) {
  let chill =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16);
  return chill.toFixed(0);
}
document.querySelector("#windchill").innerHTML = chill;