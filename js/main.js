$(document).ready(function(){
	$.getJSON("https://freegeoip.net/json?callback=?", function(data) {
		console.log(data);
	});
});