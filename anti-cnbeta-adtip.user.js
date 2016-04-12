// ==UserScript==
// @name         CnBeta辅助工具
// @namespace    http://www.fishlee.net/
// @version      2.0
// @description  CnBeta上的辅助性工具，用于去除广告等
// @author       iFish(木鱼)
// @match        http://www.cnbeta.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';
    var oe = this.eval;
    var uw = this;
    try {
        uw.eval = function(code) {
            if (code && code.indexOf("J_mask_close") !== -1) {
                return;
            }
            oe.apply(this, Array.prototype.slice.call(arguments));
        };
    } catch (e) {}
    try {
        uw.document.addEventListener("DOMContentLoaded", function() {
            uw.checkBlock = {
                on: function() {}
            };
            if (uw.CheckBlock) uw.CheckBlock.prototype.on = function() {};
        });
    } catch (e) {}
    var checkCount = 0;
    var fn = function() {
        try {
            var eles = Array.prototype.slice.call(document.querySelectorAll("body>div[id][style*='important']>div[style*='fixed']"));
            if (eles.length) {
                eles.forEach(function(ele) {
                    ele.parentNode.remove();
                });
            } else {
                if (checkCount++ < 200) {
                    setTimeout(fn, 20);
                }
            }
        } catch (e) {}
    };
    fn();
    (function() {
        var style = document.createElement("style");
        style.textContent = ".cbhelp{height:" + Math.round((Math.random() + 1) * 113) + "px!important; width:" + Math.round((Math.random() + 1) * 113) + "px!important; visibility: hidden; position: fixed; opacity:0; left: " + Math.round((((Math.random() + 1) * 2000) * (Math.random() > 0.5 ? 1 : -1))) + "px; }";
        document.head.appendChild(style);
    })();
}).apply(unsafeWindow);