$(document).ready(function ($) {

    if ($('.slide-trips').length > 0) {

        var $container = $('.slide-trips'),
            $imgs = $('.slide img');


        $('.select-item').click(function () {

            var $this = $(this), filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            if ($this.hasClass('selected')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });

    }

});