var $lateral_menu_trigger = $('#menu-trigger'),
    $content_wrapper = $('.main-content'),
    $navigation = $('header');

$lateral_menu_trigger.on('click', function(e) {
    e.preventDefault();

    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otrnasitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $('body').toggleClass('overflow-hidden');
    })
});

$content_wrapper.on('click', function(e) {
    if (!$(e.target).is('#menu-trigger, #menu-trigger span')) {
        $lateral_menu_trigger.removeClass('is-clicked');
        $navigation.removeClass('lateral-menu-is-open');
        $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otrnasitionend oTransitionEnd msTransitionEnd transitionend', function() {
            $('body').removeClass('overflow-hidden');
        });
        $('#lateral-nav').removeClass('lateral-menu-is-open');
        if ($('html').hasClass('no-csstransitions')) {
            $('body').removeClass('overflow-hidden');
        }
    }
});

