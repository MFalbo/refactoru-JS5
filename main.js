
// $(document).on('ready', function() {
  
// ----------------------------Partially functional non-delegated event handler----------------------------------
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


//--------------- Individually editable elements using .editable class and a delegated click event-----------------

//   $(document).on('click', '.editable', function(){

//     var currElement = $(this);
//     // console.log(currElement);
//     var newText = $('<textarea type="text">Enter Info</textarea>');
//     currElement.before(newText);
//       newText.focus();
//     currElement.hide();

//     newText.keydown(function(e){
//       // console.log(e.keyCode);
//       if(e.keyCode === 13){
//         currElement.text( newText.val() );
//         currElement.show()
//         $(this).remove();
//       }

//     });


//       newText.blur(function(){

//         currElement.text( newText.val() );
//         currElement.show()
//         $(this).remove();
//         // console.log( $(this).val() );

//       })

//   });


// });


// -----------------------------------Solution using X-Editable Library-------------------------------

$(document).ready(function(){

  $.fn.editable.defaults.mode = 'inline';

  $('#editable').editable({
    type: 'text',
    title: 'Enter Information',
    success: function(response, newValue){
      // console.log(response);
      $(this).text(newValue);

    }


  });





});

























