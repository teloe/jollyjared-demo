jQuery(document).ready(function($){
    
    let $doc = $(document);
    $doc.on('scroll', function() {
        return ($doc.scrollTop() > 100) ? $('.menu-bar, .logo').addClass('shrink') : $('.menu-bar, .logo').removeClass('shrink');
    });


});