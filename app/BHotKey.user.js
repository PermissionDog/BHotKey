// ==UserScript==
// @name         BHotKey
// @namespace    https://github.com/PermissionDog/BHotKey
// @version      0.1
// @description  添加B站播放器快捷键
// @author       PermissionDog
// @match        *://www.bilibili.com/bangumi/play/ep*
// @match        *://www.bilibili.com/video/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    //配置开始
    const 在控制台中显示按下按键 = true;

    const 开启或关闭弹幕 = 'Numpad1';
    //配置结束




    unsafeWindow.onkeypress = function (evt) {
        //排除输入框等不需要判断快捷键的情况
        if (evt.target != document.body) {
            return;
        }
        if (在控制台中显示按下按键) {
            console.log(`${evt.code} 被按下!`);
        }
        switch (evt.code) {
            case 开启或关闭弹幕:
                switchDanmaku();
                break;
        }
    };

    function switchDanmaku() {
        document.querySelector("#bilibiliPlayer > div.bilibili-player-area.video-state-pause.video-control-show > div.bilibili-player-video-bottom-area > div > div.bilibili-player-video-danmaku-root > div.bilibili-player-video-danmaku-switch.bui.bui-switch > input").click();
    }
})();