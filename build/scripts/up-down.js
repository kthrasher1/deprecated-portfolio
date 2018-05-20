jQuery(document).ready(function($) {
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1550, 'easeInOutExpo');
            event.preventDefault();
        });
    });


})(jQuery);


