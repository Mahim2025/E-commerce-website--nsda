
$(document).ready(function() {
    // Image Zoom
    const $container = $('.zoom-container');
    const $img = $('#main-product-img');

    $container.on('mousemove', function(e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
        const y = ((e.pageY - top - window.pageYOffset) / height) * 100;
        $img.css('transform-origin', `${x}% ${y}%`).css('transform','scale(1.5)');
    }).on('mouseleave', function() {
        $img.css('transform-origin', 'center center').css('transform','scale(1)');
    });

    // Quantity Counter
    $('#plus-btn').click(function() {
        $('#qty-input').val(parseInt($('#qty-input').val()) + 1);
    });
    $('#minus-btn').click(function() {
        let val = parseInt($('#qty-input').val());
        if(val > 1) $('#qty-input').val(val - 1);
    });
});
