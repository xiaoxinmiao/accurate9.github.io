$(function () {
    //var index = $("#top").html();
    $("#top").load("views/common/top.html", function () { });
    $("#footer").load("/views/common/footer.html", function () { });

    if ($('#owl-demo').length > 0) {
        $('#owl-demo').owlCarousel({
            items: 1,
            navigation: true,
            navigationText: ["上一个", "下一个"],
            autoPlay: true,
            stopOnHover: true
        }).hover(function () {
            $('.owl-buttons').show();
        }, function () {
            $('.owl-buttons').hide();
        });
    }

    ib1();
    wxqq();

    if ($('.ct_r .wxqq li a>img').length > 0) {
        $('.ct_r .wxqq li a').hover(function () {
            $(this).find('span').stop(true, true).fadeIn();
        }, function () {
            $(this).find('span').stop(true, true).fadeOut();
        });
    }
})

function ib1() {
    var win_height = $(window).height(),
        i = $('.list li').size(),
        j = 0;
    if (826 < win_height) {
        setTimeout(function () {
            if (j < i) {
                var list = setInterval(function () {
                    $('.list li').eq(j).animate({ left: "0" }, 700);
                    j++;
                }, 400);
            } else {
                clearInterval(list);
            }
        }, 300);
    };
};

function wxqq() {
    $(".wxqq li").each(function (index) {
        $(this).stop().delay(($(".wxqq li").size() - 1 + index) * 300).animate({ marginRight: 0,opacity:1 }, 200);
    });
    $(".ljzx").stop().delay(1400).animate({ top: 0,opacity:1 }, 500);
}