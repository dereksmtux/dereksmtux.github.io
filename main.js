function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.content').toggle();
  $('.main').fadeIn(1500);


}
// abstracted backbutton event handler

  function backButton(classToResize, classToToggle, iconToChange) {
    changeSizeBack( classToResize, '25%', iconToChange)
    $(classToToggle).toggle();
    $('.back-button').toggle();
    $('.content').toggle();
  }




//function for resizing back to original
function changeSizeBack(tag, size, icon) {

  $( tag ).width( size );
  $(icon).width('85%');

}
//abstracted function for resizing the option window
function choose(classToShow, iconForClass, classToHide){
    $(classToHide).toggle();
    $(classToShow).width('75%');
    $(iconForClass).width('25%');
    $('.content').toggle();
    $('.back-button').toggle();

}
$(document).ready(main);
