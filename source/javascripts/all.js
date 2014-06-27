//= require_tree .

var $d          = $(document);
var $w          = $(window);
var $register   = $('#register');
var $navAnchors = $('nav ul li > a');
var navOffset   = 19;

var scrolled       = false;
var lastScrollTime = Date.now();
var scrollEnd      = true;
setInterval(function(){
  if(scrolled) {
    $.event.trigger({
    	type: "human-scroll",
    	message: "Humanly scroll done",
    	time: new Date()
    })
    scrolled = false;
    lastScrollTime = Date.now();
    scrollEnd = false;
  }

  if(Date.now() - lastScrollTime > 100 && !scrollEnd) {
    scrollEnd = true;
    $.event.trigger({
      type: "human-scroll-end",
      message: "Humanly scroll end",
      time: new Date()
    })
    lastScrollTime = Date.now();
  }

}, 100);
$d.scroll(function(){scrolled = true;});

$d.ready(function(){
  $w.scrollTop(0);
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
    $w.scrollTop(0);
    e.preventDefault();
    e.stopPropagation();
  })

  $navAnchors.click(function(e){
    var sectionTop = $($(this).attr('href')).offset().top

    $w.scrollTop(sectionTop - navOffset);

    e.preventDefault();
    e.stopPropagation();
  })

  $('header, section.content-para').unveil(250, function(){
    var id = '#' + $(this).attr('id');

    var $el = $navAnchors.filter(function(){ return ($(this).attr('href') == id && !$(this).parent().hasClass('active')); })

    if($el.length > 0) {
      $navAnchors.parent().removeClass('active');
      $el.parent().addClass('active');
      window.location.hash = '#/' + $(this).attr('id');

      $.event.trigger({
        type: "custom-page-changed",
        message: $(this).attr('id'),
        time: new Date()
      })
    }

  });

  $d.on('human-scroll', function(){
    if ($d.scrollTop() < 710 ) {
      $register.removeClass('affix');
    } else {
      $register.addClass('affix');
    }
  })
})
