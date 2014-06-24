//= require_tree .

$(document).ready(function(){
  $('.faq').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    $('.faq').removeClass('current');
    $(this).addClass('current');
  });

  $('.series-row').click(function(e){
    if( $(this).hasClass('js-expanded') ) {
      $(this).removeClass('js-expanded');
    } else {
      $(this).addClass('js-expanded');
    }
  })
  $('.nav-logo').click(function(e){
    window.scrollTo(0);
    e.preventDefault();
    e.stopPropagation();

  })
})
