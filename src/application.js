// grabbing relative prices as assigned in the 'data' tags of the HTML

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

// filtering different tour items based on class names (onclick)
$(document).ready(function() {
  $('#filters').on('click', '.on-sale', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
});

// logging using .length
$(document).ready(function(){
  $('.count').on('click', function() {
	 var count = $( ".tour" ).length;
	 window.alert("There are " + count + " tours");
 });
});

// showing/hiding any element of the page with slideToggle()
$(document).ready(function() {
  $(".slide").on('click', function() {
    $('#current').slideToggle();
  });
});

// grabbing user input via keypress
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    var price = +$(this).closest('.tour').data('daily-price');
    $('#nights-count').text(nights);
    $('#total').text(price * nights);
  });
    $('#nights').on('focus', function(){
    $(this).val(7);
});
});

// slide for photos
$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
});

// applying CSS via classes thru jquery and hiding/showing related photos
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).toggleClass('highlighted');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
    $(this).closest('.tour').find('.photos').show();
  });
  $('.tour').on('mouseleave', function() {
    $(this).toggleClass('highlighted');
    $(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');
    $(this).closest('.tour').find('.photos').hide();
  });
});
