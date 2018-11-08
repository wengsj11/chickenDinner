//加载轮播图
$(window).on('load', function() {
    $('.ma5slider').ma5slider();
});
//  window.onload=function(){
// 	window.scrollTo(0,0);//滚动到顶部
// 	//window.scrollTo(0,document.body.scrollHeight);//滚动到页面底部
// }
$(document).ready(function(e) {
    var h = window.innerHeight;
    $('#hh').height(h + 'px');
    $(window).resize(function() {
        var h = window.innerHeight;
        $('#hh').height(h + 'px');
    })

    /* 固定导航栏 */
    var navOffset = $("#nav").offset().top;
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        // console.log(scrollPos);
        // console.log(navOffset);
        if (scrollPos >= navOffset) {
            $("#nav").css("position", "fixed");
            $("#nav").css("margin", 0);
        } else {
            $("#nav").css("position", "relative");
            $("#nav").css("margin", "0 auto 0 auto");
        }
    });
    /* 导航栏active焦点设置 */
    $('.links li').bind('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

jQuery(document).ready(function($) {
    $(".links li a").click(function(event) {
        var index = this.title
        var id = '#' + 'index_' + index
        $("html,body").animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });
    $(".taoba").click(function(event) {
        var index = this.title
        var id = '#' + 'index_' + index
        $("html,body").animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });

    function a(x, y) {
        l = $('#main').offset().left;
        w = $('#main').width();
        $('#tbox').css('left', (l + w + x) + 'px');
        $('#tbox').css('bottom', y + 'px');
    } //获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
    $(function() {
        $(window).scroll(function() {
            t = $(document).scrollTop();
            if (t > 500) {
                $('#tbox').show();
            } else {
                $('#tbox').hide();
            }
            if (t > 50) {
                $('#bktop').fadeIn('slow');
            } else {
                $('#bktop').fadeOut('slow');
            }
        })
        a(10, 100); //#tbox的div距浏览器底部和页面内容区域右侧的距离
        $('#bktop').click(function() {
            $('.fa-home').addClass('active').siblings().removeClass('active');//回到顶部设置首页active焦点
            $('body,html').animate({
                    scrollTop: 0
                },
                800); //点击回到顶部按钮，缓懂回到顶部,数字越小越快
            return false;
        })
    });
});

/*
    视频不在页面内自动暂停
*/
var body = document.body;
var win = getViewport();
// var info = document.getElementById('info');
var vid = document.getElementById('vid');
var flag = false;
function getViewport() {
    // http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}
function getCurPos() {
    var pos = vid.getBoundingClientRect();
    if (pos.top > win.height) {
        // info.innerText = '我在下面';
        // console.log('我在下面');
        vid.pause();
    } else if (pos.bottom < 0) {
        // info.innerText = '我在上面';
        // console.log('我在上面');
        vid.pause();
    } else if (pos.left > win.width) {
        // info.innerText = '我在右边';
        // console.log('我在右边');
    } else if (pos.right < 0) {
        // info.innerText = '我在左边';
        // console.log('我在左边');
    } else {
        // info.innerText = '我在当前屏';
        // console.log('我在当前屏');
        if (flag == false) {
            vid.play();
        }
        flag = true;
    }
}
window.addEventListener('scroll', getCurPos, false);
window.addEventListener('resize', function() {
    win = getViewport();　
    getCurPos();
}, false);

/* 鼠标特效 */
var a_idx = 0;
var b_idx = 0;
/*   文字和颜色数组 */
var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
var b = new Array("#FF0000", "#FF7F00", " #FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF", "#FF0000", "#FF7F00", " #FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = parseInt(12 * Math.random()); //文字随机数
        b_idx = parseInt(14 * Math.random()); //颜色随机数
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999,
            "font-size": "1.3rem", //字体大小
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            // "color": b[b_idx]
            "color": "red"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});
/*富强民主点击特效*/
function showHideCode() {
    $("#showdiv").toggle();
}

var init = function () {
    var _bg3width = $("#content-sec3-adjust").width();
    $("#content-sec3-adjust").css("margin-left", _bg3width * -1 / 2 + "px");
};
$(".tanchu").click(function () {
    layer.open({
        type: 1,
        title: false,
        area: ['300px', '300px'],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        content: '<img src="assets/img/qr.png">'
    });
});
    
//aos.js 动画效果
AOS.init({
    offset: 100,
    duration: 1200,
    easing: 'ease-in-out-sine',
    // delay: 200
});