$(document).ready(function(){
	// load index page when the page loads
	
		$("#content").load("gb.html");
	});
	$("#de").click(function(){
	// load împrint.html onclick
		$("#content").load("de.html");
	});
	
	$("#gb").click(function(){
	// load împrint.html onclick
		$("#content").load("gb.html");
	});

	$("#imprint").click(function(){
	// load împrint.html onclick
		$("#content").load("imprint.html");
	});
$(function() {

	
	$('#menu a').click(function() {
     	var $this = $(this);
    	var $tab  = $('#'+$this.data('content'));

     	$('#menu a').removeClass('active').addCSS( 'text-decoration', 'underline');
     	 $this.addClass('active');


     	$('div.tab').removeClass('active').addClass('nocontent');
    	 $tab.addClass('active').removeClass('nocontent');

	});

	
});