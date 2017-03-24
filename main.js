function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.main').fadeIn(1500);
  //on click for gaming icon
  $(".left").on('click',  function() {
    //resizes element
    $('.left').width('70%');
    $('#gaming-icon').width('25%')
    //gets rid of the left element TO DO 
    $('.right').toggle();
    $('.back-button').toggle();

  });

}

$(document).ready(main);
