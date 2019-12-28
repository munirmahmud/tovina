(function ($) {
 "use strict";
    
/*-- Mobile Menu --*/
$('.main-menu').meanmenu({
	meanScreenWidth: '767',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="zmdi zmdi-close"></i>',
	meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
});
    
/*-- Teacher Slider --*/
$('.category-browse-slider').slick({
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
        breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
        breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
});
    
/*-- Teacher Slider --*/
$('.popular-location-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
        breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
        breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
});

var msGrid = $('.masonry-grid');
/*-- Images Loaded --*/
msGrid.imagesLoaded( function() {
    msGrid.masonry({
      // options...
      itemSelector: '.masonry-item',
    });
});
    

  
 
/*-- ScrollUp -- */	
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
}); 	   
    
    
/*-- Gallery Popup --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
    
/*-- Select2 Activew --*/
$(".select2").select2();
    
$('.color-picker').colorpicker({
    colorSelectors: {
        'black': '#000000',
        'white': '#ffffff',
        'red': '#FF0000',
        'default': '#777777',
        'primary': '#337ab7',
        'success': '#5cb85c',
        'info': '#5bc0de',
        'warning': '#f0ad4e',
        'danger': '#d9534f' }
});
 
$('.timepicker').datetimepicker({
    format: 'LT',
    icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-bullseye',
        clear: 'fa fa-trash',
        close: 'fa fa-tims'
    },
});
    
    
    
})(jQuery); 




