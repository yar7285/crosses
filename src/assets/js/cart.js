$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('input[name="_token"]').attr('value')
    }
});
$(document).ready(function () {
    $(".cart-btn").bind("click", function (event) {
        $.get('/cart', function (data) {
            $('.product-cart-container').empty();
            var el = $('.product-cart-container');
            el.html(data);
        });
    });
});
