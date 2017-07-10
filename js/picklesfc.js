$(document).ready(function(){
	$(".success").hide();
	$("form").submit(function(e) {
    	e.preventDefault();
    	$("#wanttoplay").hide();
  		$(".success").show();
	});

	$(".successcollab").hide();
	$(".form").submit(function(e) {
    	e.preventDefault();
		$("#collaborate").hide();
  		$(".successcollab").show();
  	});

	$(".alextext").hide();
	$(".alex").click(function(e) {

	});
	$(".readmore").click(function() {
  		$(".alex").hide();
  		$(".alextext").show();
	});


 });


