//= require_tree .

$(document).ready(function(){
  $('.faq').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    $('.faq').removeClass('current');
    $(this).addClass('current');
  });
  $('.faq:first').trigger('click');
})
