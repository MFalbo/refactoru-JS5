
$(document).on('ready', function() {
  

  // $('.editable').click(function(){
  // 	$(this).hide();
  // 	$('.input-container').show();
  // 	$('textarea').show();
  // 	$('textarea').focus();

  //       $('textarea').blur(function(){
  //         $('.edit-paragraph').text($('textarea').val());
  //         $('.edit-paragraph').show();
  //         $(this).hide();

  // });

  // });



  $(document).on('click', '.editable', function(){

    var currElement = $(this);
    // console.log(currElement);
    var newText = $('<textarea type="text" placeholder="Enter Info"></textarea>');
    currElement.before(newText);
      newText.focus();
    currElement.hide();

    newText.keydown(function(e){
      // console.log(e.keyCode);
      if(e.keyCode === 13){
        currElement.text( newText.val() );
        currElement.show()
        $(this).remove();
      }

    });
    

      newText.blur(function(){

        currElement.text( newText.val() );
        currElement.show()
        $(this).remove();
        // console.log( $(this).val() );

      })

  });


});





// $(document).on('ready', function() {
  

//   $(".editable").click(function(){
//     $('.edit-paragraph').add('<div class="input-container">
//       <form><textarea type="text" placeholder="Enter Info"></textarea></form>
//       </div>');
//     $(".input-container").show();
//     $('textarea').show();
//     $('textarea').focus();

//         $("textarea").blur(function(){
//       $('.edit-paragraph').text($('textarea').val());
//       $(".edit-paragraph").show();
//       $('textarea').hide();

//   });

//   });




// });