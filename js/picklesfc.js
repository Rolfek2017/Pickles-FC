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

 });
