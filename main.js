

function power(){
	let vari = document.getElementById('var').value;
	window.alert('The given variable raised to itself is ' + Math.pow(vari,vari) + '.');
}

function rounded(){
	let vari = document.getElementById('var').value;
	window.alert('The given variable rounded off after getting its square root is ' + Math.round(Math.sqrt(vari))+ '.');
}

function roots() {
	let vari = document.getElementById('var').value;
	window.alert('The square root of the given variable is ' + (Math.sqrt(vari)).toFixed(2) + '.');
}

function randomized() {
	let vari = document.getElementById('var').value;
	window.alert('A random number between 0 to the given variable is ' + (Math.random()*vari).toFixed(2) + '.');
}