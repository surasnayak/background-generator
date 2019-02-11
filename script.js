var color1 = document.getElementById("c1");
var color2 = document.getElementById("c2");
var body = document.getElementById("body");
var output = document.getElementById("output");

color1.addEventListener("input", function() {

	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")" ;

	output.textContent = body.style.background;
});

color2.addEventListener("input", function() {

	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")" ;

	output.innerHTML = body.style.background;
});