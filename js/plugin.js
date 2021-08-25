// For Make The Height Of Landig Page Full Screen

$upHeight = $(".upper-nav").innerHeight();
$navHeight = $(".navbar").innerHeight();
$land = $(".landing").css(
  "height",
  window.innerHeight - ($upHeight + $navHeight)
);

// Galary 
$('.galary ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');

  if ($(this).data('class') === 'all') {
    $('.galary-image div.img-box').css('opacity', '1');
  }else {
    $('.galary-image div.img-box').css('opacity', '.09');
    $($(this).data('class')).parent().css('opacity', '1');
  }
});



