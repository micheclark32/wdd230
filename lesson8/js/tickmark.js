function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

/***Removing Select Region from Value***/

var selectElement = document.getElementById("Region");

for (var i = selectElement.length - 1; i >= 0; i--){
  if (selectElement.options[i].value == 'A') {
    selectElement.remove(i);
  }
}
