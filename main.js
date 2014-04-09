$(document).on('ready', function() {
  $(".edit-paragraph").mouseenter(function(){
  	$(".edit-paragraph").css("background-color", "lightblue");
  	$(".edit-paragraph").css("padding", "30px");
  });
  $(".edit-paragraph").mouseleave(function(){
  	$(".edit-paragraph").css("background-color", "#FFF");
  	$(".edit-paragraph").css("padding", "10px");
  });
});