$(document).ready(function(){
	$.getJSON("http://ip-api.com/json", function(data) {
		console.log(data);
	});
});