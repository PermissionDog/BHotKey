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

(function () {
    'use strict';


    /**
     * 食用方法:
     * 在 '在控制台中显示按下按键' 为 true 时
     * 按下 F12 打开控制台, 按下按键, 会显示按下按键的代码
     * 将 代码 复制到各个配置快捷键项中(记得带引号) 可修改快捷键
     */
    //配置开始

    const 在控制台中显示按下按键 = true;

    //快捷键配置
    const 开启或关闭弹幕 = 'Numpad1';
    const 加速播放 = 'NumpadAdd';
    const 减速播放 = 'NumpadSubtract';

    //配置结束




    unsafeWindow.onkeypress = function (evt) {
        //排除输入框等不需要判断快捷键的情况
        if (evt.target != document.body) {
            return;
        }
        if (在控制台中显示按下按键) {
            console.log(`'${evt.code}' 被按下!`);
        }
        switch (evt.code) {
            case 开启或关闭弹幕:
                switchDanmaku();
                break;
            case 加速播放:
                speedUp();
                break;
            case 减速播放:
                speedDown();
                break;
        }
    };

    function switchDanmaku() {
        document.querySelector("#bilibiliPlayer > div.bilibili-player-area.video-state-pause.video-control-show > div.bilibili-player-video-bottom-area > div > div.bilibili-player-video-danmaku-root > div.bilibili-player-video-danmaku-switch.bui.bui-switch > input").click();
    }

    const SPEED_NODE = () => document.querySelector("#bilibiliPlayer > div.bilibili-player-area.video-state-pause.video-control-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-speed > div > ul");
    const SPEED_2 = 0;
    const SPEED_1_5 = 1;
    const SPEED_1_25 = 2;
    const SPEED_1 = 3;
    const SPEED_0_75 = 4;
    const SPEED_0_5 = 5;

    function getSpeed() {
        const arr = SPEED_NODE().children;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('bilibili-player-active')) {
                return i;
            }
        }
    }

    function speedUp() {
        let currentSpeed = getSpeed();
        if (currentSpeed == SPEED_2) {
            return;
        }
        SPEED_NODE().children[currentSpeed - 1].click();
    }

    function speedDown() {
        let currentSpeed = getSpeed();
        if (currentSpeed == SPEED_0_5) {
            return;
        }
        SPEED_NODE().children[currentSpeed + 1].click();
    }
})();