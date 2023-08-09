// Toolip Bootstrap 5.3
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

// Upload Image
/* 'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 )); */

// Daterangepicker
$(function() {
    // date single
    $('input[name="date-single"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");
    });

    //datetimes
    $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        opens: 'left',
        locale: {
          format: 'M/DD hh:mm A'
        }
        
    });
});

// Range Slider
$('input[type="range"]').rangeslider();

// CLick AddClass
$(".box-dropdown").click(function() {
  $(this).toggleClass("active");
}); 

/* $(".box-dropdown-action").click(function() {
  $(this).toggleClass("active");
});  */

$(".list-checkbox .list-item .icon").click(function() {
  $(this).closest('.list-item').toggleClass("active");
}); 

$(".campaign-history .btn-show-hide").click(function() {
  $(this).closest('.campaign-history').find('.data-table').slideToggle();
}); 

$(".box-switch").click(function() {
  $(this).toggleClass("active");
  $(this).closest('.box-VAT').find('.box-show-hide').slideToggle();
}); 

$(".bidding-price .box-switch").click(function() {
  $(this).closest('.bidding-price').find('.box-show-hide').slideToggle();
}); 

$(".btn-add-creative").click(function() {
  $('.box-layer-right').addClass('active');
  $('body').addClass('overflow-hidden');
}); 

$(".box-layer-right .icon-close").click(function() {
  $('.box-layer-right').removeClass('active');
  $('body').removeClass('overflow-hidden');
}); 


