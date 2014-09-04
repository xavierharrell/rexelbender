jQuery(document).ready(function($) {
    //Foundation Init
    $(document).foundation();

    var $container = $('.portfolio').isotope({
    itemSelector: '.slide',
    layoutMode: 'fitRows',
     });

  // bind filter button click
  $('.portfolio-select').on( 'click', 'li a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $container.isotope({filter: filterValue });
        return false;
  });

// Magnific //

$('.image-link').magnificPopup(
  {
    type:'image',
    image: {
      verticalFit: true
    }
  });


});//End of Scripts
