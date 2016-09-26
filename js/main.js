$(document).ready(function(){
	$.getJSON("https://ip-api.com/json", function(data) {
		console.log(data);
	});
});