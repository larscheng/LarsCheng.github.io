$(function () {
    var qcloud = {};
    $('[_t_nav]').hover(function () {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function () {
            $('#' + _nav).stop(true, true).fadeIn(100);
        }, 0);
    },
    function () {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function () {
            $('#' + _nav).stop(true, true).fadeOut(0);
        }, 100);
    });
    /*跳转*/
    var goTop = $('.gotop');
    goTop.fadeOut();
    $(window, document).scroll(function () {
        $(this).scrollTop() > 100 ? goTop.fadeIn() : goTop.fadeOut();
    });
    /*
    * 初始化按钮的loading功能，点击后将显示Loading字样，并且按钮被disabled掉，无法连续点击，防止二次提交
    * 超过3秒后按钮将恢复原状
    */
    $('button[data-loading-text]').click(function () {
        var btn = $(this).button('loading');
        setTimeout(function () {
            btn.button('reset');
        }, 3000);
    });
});
// 定义一个新的复制对象
var clipboard = new ClipboardJS('#copyallcode');
clipboard.on('success', function (e) {
    if (e.text != "") {
        JsonsMessageBox($("#copyallcode"), "复制成功");
    }
    else {
        JsonsMessageBox($("#copyallcode"), "找不到数据，无法复制");
    }
});

clipboard.on('error', function (e) {
    JsonsMessageBox($("#copyallcode"), "复制失败，请手动复制");
});
function JsonsMessageBox(target, msg) {
    target.attr("data-original-title", msg);
    $('[data-toggle="tooltip"]').tooltip();
    target.tooltip('show');
    target.focus();
    var id = setTimeout(function () { target.attr("data-original-title", ""); target.tooltip('hide'); }, 4000);
}