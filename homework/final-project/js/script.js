$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

var $grid = $('.grid');


$grid.imagesLoaded(function() {
  // init Isotope after all images have loaded
  $grid.isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'masonry'
	});
});

$('#all-button').click(function () {
	$grid.isotope({ filter: '*' });
})

$('#people-button').click(function () {
	$grid.isotope({ filter: '.people' });
})

$('#places-button').click(function () {
	$grid.isotope({ filter: '.places' });
})

$('#things-button').click(function () {
	$grid.isotope({ filter: '.things' });
})
