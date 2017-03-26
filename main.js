function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.content').toggle();
  $('.main').fadeIn(1500);
}
// abstracted backbutton event handler
  function backButton(classToResize, classToToggle, iconToChange) {
    changeSizeBack( classToResize, iconToChange)
    $(classToToggle).toggle();
    $('.back-button').toggle();
    $('.content').toggle();
  }




//function for resizing a choise element back to original
function changeSizeBack(tag, icon) {

  $( tag ).width('25%');
  $(icon).width('85%');

}
//abstracted function for expandingthe option window
function choose(classToShow, iconForClass, classToHide){
    $(classToHide).toggle();
    $(classToShow).width('75%');
    $(iconForClass).width('25%');
    $('.content').toggle();
    $('.back-button').toggle();

}
$(document).ready(main);
