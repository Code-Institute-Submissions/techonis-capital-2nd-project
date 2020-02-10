/* For switching tabs in portfolio */
$('#object-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

/* isotope filter */
$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

/* Charts for cards */