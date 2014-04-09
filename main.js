
$(document).on('ready', function() {
  

  $(".text-container").click(function(){
  	$(".edit-paragraph").hide();
  	$(".input-container").show();
  	$('textarea').show();
  	$('textarea').focus();
  });

  $(".input-container").click(function(){

  		$(".edit-paragraph").show();
  		$('textarea').hide();
  		$('.edit-paragraph').text($('textarea').val());

  });



});

