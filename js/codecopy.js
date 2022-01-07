
$(function () {
    // tags 隨機大小 顔色
    var list = document.querySelectorAll(".tag-cloud-tags a");

    if ($(window).width() > 768) {
        Array.prototype.forEach.call(list, (item, index) => {
            item.style.fontSize = Math.floor(Math.random() * 20 + 15) + "px"; //15 ~ 35
            item.style.color =
                "rgb(" +
                Math.floor(Math.random() * 201) +
                ", " +
                Math.floor(Math.random() * 201) +
                ", " +
                Math.floor(Math.random() * 201) +
                ")"; // 0,0,0 -> 200,200,200
        });
    } else {
        Array.prototype.forEach.call(list, (item, index) => {
            item.style.fontSize = Math.floor(Math.random() * 13 + 15) + "px"; //15 ~ 28
            item.style.color =
                "rgb(" +
                Math.floor(Math.random() * 201) +
                ", " +
                Math.floor(Math.random() * 201) +
                ", " +
                Math.floor(Math.random() * 201) +
                ")"; // 0,0,0 -> 200,200,200
        });
    }


    //代码copy
    // Add copy icon

    var highlight_copy = GLOBAL_CONFIG.highlight_copy
    if (highlight_copy == 'true') {
        $('figure.highlight').wrap('<div class="code-area-wrap"></div>')
        var $copyIcon = $('<i class="fa fa-clipboard" aria-hidden="true"></i>')
        var $notice = $('<div class="copy-notice"></div>')
        $('.code-area-wrap').prepend($copyIcon)
        $('.code-area-wrap').prepend($notice)
        // copy function
        function copy(text, ctx) {
            if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
                try {
                    document.execCommand('copy') // Security exception may be thrown by some browsers.
                    $(ctx).prev('.copy-notice')
                        .text(GLOBAL_CONFIG.copy.success)
                        .animate({
                            opacity: 1,
                            right: 30
                        }, 450, function () {
                            setTimeout(function () {
                                $(ctx).prev('.copy-notice').animate({
                                    opacity: 0,
                                    right: 0
                                }, 650)
                            }, 400)
                        })
                } catch (ex) {
                    $(ctx).prev('.copy-notice')
                        .text(GLOBAL_CONFIG.copy.error)
                        .animate({
                            opacity: 1,
                            right: 30
                        }, 650, function () {
                            setTimeout(function () {
                                $(ctx).prev('.copy-notice').animate({
                                    opacity: 0,
                                    right: 0
                                }, 650)
                            }, 400)
                        })
                    return false
                }
            } else {
                $(ctx).prev('.copy-notice').text(GLOBAL_CONFIG.copy.noSupport)
            }
        }
        // click events
        $('.code-area-wrap .fa-clipboard').on('click', function () {
            var selection = window.getSelection()
            var range = document.createRange()
            range.selectNodeContents($(this).siblings('figure').find('.code pre')[0])
            selection.removeAllRanges()
            selection.addRange(range)
            var text = selection.toString()
            copy(text, this)
            selection.removeAllRanges()
        })
    }
})