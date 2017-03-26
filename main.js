function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.content').toggle();
  $('.main').fadeIn(1500);
}

//better choose function
/*
$('.section').on('click', function(){
  $('.section').toggle();
  $(this).toggle();
  $('.choice').toggleClass('clicked');
  $(this).toggleClass('clicked');
  $('.content').toggle();
  $('.back-button').toggle();
});
*/
//event handler for the icon to expand a section
$('.choice').on('click', function(){
  $('.section').toggle();
  $(this).parent().toggle();
  $(this).parent().toggleClass('clicked');
  $(this).toggleClass('clicked')
  $('.content').toggle();
  $('.back-button').toggle();
});

//event handler for the back back-button
$('.back-button').on('click', function(){
  $('.section').toggle();
  $(this).parent().toggle();
  $(this).parent().toggleClass('clicked');
  $(this).siblings().toggleClass('clicked');
  $('.content').toggle();
  $('.back-button').toggle();

});

$(document).ready(main);
