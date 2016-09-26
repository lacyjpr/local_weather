$(document).ready(function(){
	$.getJSON("https://freegeoip.net/json", function(data) {
		console.log(data);
	});
});