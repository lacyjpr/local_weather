$(document).ready(function(){

	var lat = 0;
	var lon = 0;

	function getLocation() {
		$.getJSON("http://freegeoip.net/json?callback=?", function(data) {
			console.log(data);
			lat = data.latitude;
			console.log("lat " + lat);
			lon = data.longitude;
			console.log("lon " + lon);
		});
	}
	getLocation();

	$.when(getLocation()).done(function(){
		// Use cors-anywhere to avoid mixed content message
		$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=d5cc4a4def8bbe77201724558d5bd532", function(response) {
			console.log(response);
		}); 

	});
});

//openweather key d5cc4a4def8bbe77201724558d5bd532