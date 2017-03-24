function main(){
  $('.main').hide();
  $('.main').fadeIn(1500);
  //on click for gaming icon
  $("#gaming").on('click',  function() {
    $('.left').width('70%');
    $('#gaming').width('25%')

  });

}

$(document).ready(main);
