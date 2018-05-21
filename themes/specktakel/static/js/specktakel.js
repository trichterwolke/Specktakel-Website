/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header   
    $("header h1").fitText(3,
        {
            minFontSize: '20px',
            maxFontSize: '36px'
        }
    );

    $("header h2 p").fitText(0.8,
        {
            minFontSize: '50px',
            maxFontSize: '120px'
        }
    );

    $("header h3").fitText(1.2,
        {
            minFontSize: '36px',
            maxFontSize: '60px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Initialize slippy-map.js
    var lat = parseFloat($('#latitude').val());
    var lon = parseFloat($('#longitude').val());
    new SlippyMap(lat, lon).init();
})(jQuery); // End of use strict