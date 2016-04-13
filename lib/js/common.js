$(function () {
    //var index = $("#top").html();
    $("#top").load("http://localhost:20289/views/common/top.html", function () {
        //$(".nav li").removeClass("now");
        //$(".nav li").eq(index).addClass("now");
    });
    $("#footer").load("http://localhost:20289/views/common/footer.html", function () {
        //$(".nav li").removeClass("now");
        //$(".nav li").eq(index).addClass("now");
    });

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

    ib1();
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