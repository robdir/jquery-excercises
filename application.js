// grabbing relative prices as assigned in he 'data' tags of the HTML

$(document).ready(function() {
  $('.tour').on('click','button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>' + '<br>' + 'Call 1-555-jquery-air for a $'
     + discount + '  discount.</span>' +'<br>');
    tour.append(message);
    // $(this).remove();
  });
});

$(document).ready(function() {
  $('#filters').on('click', '.on-sale', function() {
    $('.highlight').removeClass();
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.highlight').removeClass();
    $('.tour').filter('.featured').addClass('highlight');
  });
});
