"use strict";

var tinkerUtil = {
    backTop: function backTop() {
        var topTimer = setInterval(function () {
            var currTop = document.body.scrollTop;
            document.body.scrollTop -= Math.max(Math.ceil(currTop / 9) + 2);
            if (currTop === 0) {
                clearInterval(topTimer);
            }
        }, 20);
    },

    // 获取元素在页面上相对左上角的位置
    getAbsPosition: function getAbsPosition(e) {
        var x = e.offsetLeft;
        var y = e.offsetTop;
        while (e = e.offsetParent) {
            x += e.offsetLeft;
            y += e.offsetTop;
        }
        return {
            "x": x,
            "y": y
        };
    }
};

module.exports = tinkerUtil;