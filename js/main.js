$(document).ready(function(){
	$.getJSON("https://freegeoip.net/jsonp", function(data) {
		console.log(data);
	});
});