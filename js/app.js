jQuery(document).ready(function($) {
    //Foundation Init
    $(document).foundation();

    var $container = $('.port-container').isotope({
    itemSelector: '.port-item',
    layoutMode: 'fitRows',
    animationEngine: 'best-available'
                                       });

  // bind filter button click
  $('.filter-select').on( 'click', 'li a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $container.isotope({filter: filterValue });
        return false;
  });


});//End of Scripts
