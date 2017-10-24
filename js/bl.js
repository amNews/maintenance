   				/*if $("#content-1").click().hasClass('active'){
   					
	   				$('#content-2').removeClass('active');
					$('#content-3').removeClass('active');
	   				$('#tabs-1').show();
	   				$('#tabs-2').hide();
	   				$('#tabs-3').hide();
   				};
 	 });
 	if  $("#content-2").click().hasClass('active')(
   					
	   				$('#content-3').removeClass('active');
					$('#content-1').removeClass('active');
	   				$('#tabs-2').show();
	   				$('#tabs-3').hide();
	   				$('#tabs-4').hide();

   				);*

 $("#content-1").click(){
        if ($('#content-1').hasClass('active')) {
        $('#content-2').removeClass('active');
     $('#content-3').removeClass('active');
        $('#tabs-1').show();
        $('#tabs-2').hide();
        $('#tabs-3').hide();
       }
       };

$("#content-2").click(){
        if ($('#content-2').hasClass('active')) {
        $('#content-1').removeClass('active');
     $('#content-3').removeClass('active');
        $('#tabs-2').show();
        $('#tabs-3').hide();
        $('#tabs-1').hide();
       }
       }; 

     $('#content-1').click(function() { $('#tabs-1').show(); });*/