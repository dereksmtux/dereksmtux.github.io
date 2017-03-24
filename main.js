function main(){
  //fade in for the side
  $('.main').hide();
  $('.back-button').hide();
  $('.main').fadeIn(1500);


// abstracted backbutton event handler
}
  function backButton(classToResize, classToToggle, iconToChange) {
    changeSize( classToResize, '25%', iconToChange)
    $(classToToggle).toggle();
    $('.back-button').toggle();
  }




//function for resizing
function changeSize(tag, size, icon) {

  $( tag ).width( size );
  $(icon).width('85%');

}
//abstracted function for resizing the option window
function choose(classToShow, iconForClass, classToHide){
    $(classToHide).toggle();
    $(classToShow).width('75%');
    $(iconForClass).width('25%');
    $('.back-button').toggle();

}
$(document).ready(main);
