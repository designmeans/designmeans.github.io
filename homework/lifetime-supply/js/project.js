
document.getElementById('click-me').onclick = drinkCal;

function drinkCal () {
	var age = document.getElementById('age').value;
	var maxage = document.getElementById('max-age').value;
	var item = document.getElementById('item').value;
	var numperday = document.getElementById('num-per-day').value;

	age = parseInt(age);
	maxage = parseInt(maxage);

	var yearsleft = (maxage - age);

	yearsleft = parseInt(yearsleft);
	numperday = parseInt(numperday);

	var drinksleft = (numperday * 365) * yearsleft; 

	document.getElementById('solution').innerHTML = drinksleft;
	document.getElementById('drink').innerHTML = item;

}