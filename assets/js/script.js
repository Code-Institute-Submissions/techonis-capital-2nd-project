/* For switching tabs in portfolio */
$('#object-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

/* init isotope */
var $grid = $('.grid').isotope({
  // options
});
// filter by class//
$('.filter-button-group').on( 'click', 'button', function(){
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});