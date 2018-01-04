window.onload = function () {

	carousel()
	allowDrop(ev)
	drag(ev)
	drop(ev)
	myMap()
	phone()
};
var myIndex = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); 
}
dragElement(document.getElementById(("mydiv")));

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(53.227003, -0.547516),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function phone() {
    var x = document.getElementById("menu");
    if (x.className === "topicon") {
        x.className += " responsive";
    } else {
        x.className = "topicon";
    }
}
