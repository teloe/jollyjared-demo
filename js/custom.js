jQuery(document).ready(function($){
    
    let $doc = $(document);
    $doc.on('scroll', function() {
        return ($doc.scrollTop() > 40) ? $('.menu-bar, .logo').addClass('shrink') : $('.menu-bar, .logo').removeClass('shrink');
    });

    // Flexslider
    $('.services-slider').flexslider({
        animation: "slide",
        directionNav: true
      });


});