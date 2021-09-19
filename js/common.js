$(function(){

  $(window).on('load scroll',function(){
    var value = $(this).scrollTop();
      if($(window).width()>768)
  
        if ( value > $('.main-visual').outerHeight()) {
          $('.header').addClass('fixed');
          
        } else {
          $('.header').removeClass('fixed');
        }
        // SPの場合、余白を削除
        // $('.slick-arrow').hide();
      
  });

  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    // $('body').toggleClass('noscroll');
  });

});