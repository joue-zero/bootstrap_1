// For Make TH Height Of Landig Page Full Screen

$upHeight = $(".upper-nav").innerHeight();
$navHeight = $(".navbar").innerHeight();
$land = $(".landing").css(
  "height",
  window.innerHeight - ($upHeight + $navHeight)
);


