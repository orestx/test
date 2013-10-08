
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 5000,
        values: [ 275, 900 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] +" грн" +  " - " + ui.values[ 1 ] + " грн" );
        }
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " грн" +
" - " + $( "#slider-range" ).slider( "values", 1 ) +  " грн" );
});
