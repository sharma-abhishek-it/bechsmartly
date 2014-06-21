//= require_tree .

$('.dialog-container').waypoint(function(direction){
  if(direction === 'down') {
    $(this).addClass('fixed');
  } else {
    $(this).removeClass('fixed');
  }


},{offset: 100});
