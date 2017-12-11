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
  $('#filters').on('click', '.on-sale', function(){
    var el = $('.tour').filter('.on-sale');
    el.addClass('highlight');
  });
});
