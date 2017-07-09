$(document).ready(function(){
	$(".success").hide();
	$("form").submit(function(e) {
    	e.preventDefault();
	});
	$(".enterDetails").click(function() {
  		$("#wanttoplay").hide();
  		$(".success").show();
	});

	$(".success").hide();
	$("form").submit(function(e) {
    	e.preventDefault();
	});
	$(".enterDetails").click(function() {
  		$(".wanttocollaborate").hide();
  		$(".success").show();
	});

	$(".alextext").hide();
	$(".alex").click(function(e) {

	});
	$(".readmore").click(function() {
  		$(".alex").hide();
  		$(".alextext").show();
	});


 });


