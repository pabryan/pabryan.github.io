$('.collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".show-more-less").text("Less");
});

$('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".show-more-less").text("More...");
});
