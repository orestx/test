// slider:
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 4000,
        values: [ 275, 900 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] +" грн" +  " - " + ui.values[ 1 ] + " грн" );
        }
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " грн" +
" - " + $( "#slider-range" ).slider( "values", 1 ) +  " грн" );
});
//end slider

//datepicker:
$(function() {
    $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});
//end datepicker