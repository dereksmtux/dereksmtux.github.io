function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.content').toggle();
  $('.main').fadeIn(1500);
};

//event handler for the icon to expand a section
$('.choice').on('click', function(){
  $('.section').toggle();
  $(this).parent().toggle();
  $(this).parent().toggleClass('clicked', 400);
  $(this).toggleClass('clicked')
  $('.content').toggle();
  $('.back-button').toggle();
});

//event handler for the back back-button
$('.back-button').on('click', function(){

  $(this).parent().toggleClass('clicked');
  $(this).next().next().toggleClass('clicked');
  $('.content').toggle();
  $('.back-button').toggle();
  $('.section').hide();
  $('.section').toggle(200);
  //$(this).parent().toggle(50);

});

$(document).ready(main);
