// ==UserScript==
// @name         CnBeta辅助工具
// @namespace    http://www.fishlee.net/
// @version      1.0
// @description  CnBeta上的辅助性工具，用于去除广告等
// @author       iFish(木鱼)
// @match        http://www.cnbeta.com/*
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==
(function(window, unsafeWindow, $) {
    'use strict';
    var oe = unsafeWindow.eval;
    unsafeWindow.eval = function(code) {
        if (code && code.indexOf("J_mask_close") !== -1) {
            return;
        }
        oe.apply(this, Array.prototype.slice.call(arguments));
    };
})(window, unsafeWindow, unsafeWindow.jQuery);