function getWeather() {
	// Use ip to get location
	$.ajax({
		url: "https://freegeoip.net/json/",
		success: function(data) {
			console.log(data);   
			var latitude = data.latitude;
			var longitude = data.longitude;	

			var apiKey = "d5cc4a4def8bbe77201724558d5bd532";
			// Use cors-anywhere to avoid "mixed content" errors
			var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + latitude + "&lon=" + longitude +   "&appid=" + apiKey;
			// Chain 2nd ajax within success so it can access the latitude & longitude variables 
			// Credit GMunker for showing me how this works http://codepen.io/Gmunker/pen/QKrgkz?editors=0012
			$.ajax({
				url: url,
				success: function(data) {
					console.log(data);
				} 
			});
		}
	});
}

getWeather();

//openweather key d5cc4a4def8bbe77201724558d5bd532