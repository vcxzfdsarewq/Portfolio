$(function(){

  // main visual
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    dots:true,
    arrows:false,
    cssEase: 'linear'
  });

  // works more
  $('#more-botten').on('click',function(){
    $('#more-botten').hide();
    $('#works-more').show();
  });
});