jQuery(document).ready(function(t){t(document).foundation();var e=t(".port-container").isotope({itemSelector:".port-item",layoutMode:"fitRows",animationEngine:"best-available"});t(".filter-select").on("click","li a",function(){var i=t(this).attr("data-filter");return e.isotope({filter:i}),!1})});