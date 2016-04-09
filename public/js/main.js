var counter = 0;
var ids = ["leaders", "prep-work", "agenda", "supporters", "documentation"]


function myFunction() {
  document.getElementById(ids[counter]).style.display = "block";
  counter = counter + 1
  if (ids.length == counter) {
  	document.getElementById("read-more").style.display = "none";
  	document.getElementById("cta").style.display = "block";
  }
}

function goTojobs() {
	window.open("http://product.hubspot.com/hiring");
}