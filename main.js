function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.main').fadeIn(1500);
  //on click for gaming icon
  $("#gaming-icon").on('click',  function() {
    //resizes element
    $('.left').width('70%');
    $('#gaming-icon').width('25%')
    //gets rid of the left element TO DO
    $('.right').toggle();
    $('.back-button').toggle();

  });
// backbutton event handler
$('.back-button').on('click', function() {
  changeSize('.left', '25%', '85%');
  $('.right').toggle();
  $('.back-button').toggle();
});
}

//function for resizing
function changeSize(tag, size, iconSize) {

  $( tag ).width( size );
  $('#gaming-icon').width(iconSize);

}

$(document).ready(main);
