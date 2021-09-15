$(function(){

  $('.sliter').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

  $(window).on('load scroll',function(){
    var value = $(this).scrollTop();
      if($(window).width()>768)
  
        if ( value > $('.mainView').outerHeight()) {
          $('.header').addClass('fixed');
          
        } else {
          $('.header').removeClass('fixed');
        }
  });

  $('.burger-btn').on('click',function(){
    $('.headerNav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    // $('body').toggleClass('noscroll');
  });
});