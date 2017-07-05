$(document).ready(function(){
	$(".test").hide();
	$("form").submit(function(e) {
    	e.preventDefault();
	});
	$(".enterDetails").click(function() {
  		$(".form-group").hide();
  		$(".test").show();
	});
 });
