$(window).load(function() {
    $('#preload').delay(1000).fadeOut('fast', function() {
        $('body').removeClass('preloading');
    });
});
VanillaTilt.init(document.querySelectorAll(".social__links ul li"), {
    max: 10,
    speed: 800,
        glare: true,
        "max-glare": 1
  });
/*Preloader*/
