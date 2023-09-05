$(window).scroll(function(){
    var height = $(window).scrollTop();

    var y = -1/470 * height + 94/47;
    var z = -1/4700 * height + 1.1;
    $('.card-box').eq(0).css('opacity', y);
    $('.card-box').eq(0).css('transform', `scale(${z})`);
    // 시작 500
    // 끝 970
})