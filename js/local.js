$('.collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".abstract-arrow").toggleClass('fa-caret-down fa-caret-up');
});

$('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".abstract-arrow").toggleClass('fa-caret-up fa-caret-down');
});
