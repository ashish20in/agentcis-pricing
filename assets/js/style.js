// changing ag-nav-tabs active classes
var selector = '.ag-nav-tabs div';

$(selector).on('click', function() {
    $(selector).removeClass('active');
    $(this).addClass('active');
});
// end of script

//toogle accordion style arrow
$('.accordion-2a, .accordion-2b').on('show.bs.collapse', function(n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('glyphicon-triangle-bottom glyphicon-triangle-right');

});
$('.accordion-2a, .accordion-2b').on('hide.bs.collapse', function(n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('glyphicon-triangle-right glyphicon-triangle-bottom');

});
//end of script

//COMPARE PRICING
$(function() {
    $("#checkbox").click(function() {
        if ($(this).is(":checked")) {
            $("#with-compare").show();
            $("#without-compare").hide();
        } else {
            $("#with-compare").hide();
            $("#without-compare").show();
        }
    });
});
//ennd of comparing-result