var latitude = null;
var longitude = null;

$.ajax({
	url: "https://freegeoip.net/json/",
	async: false,
	success: function(data) {
		console.log(data);   
		latitude = data.latitude;
		longitude = data.longitude;	
	}
});

var apiKey = "d5cc4a4def8bbe77201724558d5bd532";
var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +   "&appid=" + apiKey;
// console.log(url); 
$.getJSON(url,function(data){
	console.log(data);
	console.log(latitude);
	console.log(longitude);
   });


//openweather key d5cc4a4def8bbe77201724558d5bd532