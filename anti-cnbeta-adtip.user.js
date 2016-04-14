// ==UserScript==
// @name         CnBeta辅助工具
// @namespace    http://www.fishlee.net/
// @version      4.0
// @description  CnBeta上的辅助性工具，用于去除广告等
// @author       iFish(木鱼)
// @match        http://www.cnbeta.com/*
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==
/********************************************************************
 *
 *  不准备再继续修改了。因为跟 Cnbeta 这么玩真的毫无聊，
 *  有这些时间我还不如多码几行代码，人家还会发工资给我。
 *
 *  顺道求比较靠谱的IT界资讯站点，很多年都只看Cnbeta的，
 *  不是因为它好，而是因为无知。
 *
 *  所以如果 Cnbeta 继续在广告这件事上发力，那么是时候
 *  把CB从收藏夹移除了。
 *
 *  哦对了，推荐的资讯站最好有手机版哈，不要H5而是原生
 *  APP的那种。
 *
 *  大家都是搞IT的，何必在这种事情上纠缠不清是吧。
 *
 *********************************************************************/
(function() {
    'use strict';
    var oe = this.eval;
    var uw = this;
    var $ = this.jQuery;

    //以下N种方法，往往只有那么一两种有效，其它大多是为了兼容或留后手或做历史记录原因保留的
    
    try {
        uw.checkBlock = {
            on: function() {}
        };
        uw.document.addEventListener("DOMContentLoaded", function() {
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
    Object.defineProperty(uw, "onload", {
        get: function() {},
        set: function() {}
    });
    (function() {
        uw[atob("cmFuZG9tU3RyaW5n")] = function() {
            throw '求推荐综合性的IT资讯站点，这些年看Cnbeta看得有点不怎么了解IT界了';
        };
        var processed = false;
        if (!processed && $.fn.removeClass) {
            processed = !0;
            var bak = $.fn.removeClass;
            $.fn.removeClass = function(cls) {
                if (cls.indexOf("cbhelp") === -1) {
                    bak.apply(this, Array.prototype.slice.call(arguments));
                    return;
                }
                var eles = $('.cbhelp');
                eles.each(function() {
                    var template = document.createElement("template");
                    var ele = document.createElement("div");
                    this.appendChild(ele);
                    this.style = "position:fixed;opacity:0; left: " + Math.round((((Math.random() + 1) * 2000) * (Math.random() > 0.5 ? 1 : -1))) + "px;";
                    template.innerHTML = "<div style='height:" + Math.round((Math.random() + 1) * 113) + "px!important; width:" + Math.round((Math.random() + 1) * 113) + "px!important; visibility: hidden; opacity:0; left: " + Math.round((((Math.random() + 1) * 2000) * (Math.random() > 0.5 ? 1 : -1))) + "px;'>求推荐综合性的IT资讯站点，这些年看Cnbeta看得有点不怎么了解IT界了</div>";
                    var sr = ele.attachShadow && ele.attachShadow({
                        mode: "closed"
                    }) || ele.createShadowRoot();
                    var child = document.importNode(template, true);
                    sr.appendChild(child.content);
                });
            };
        }
    })();
    //===========================================================================================
    // 此方法 by xinggsf (original from http://bbs.kafan.cn/thread-2037276-1-1.html)
    // 
    // 说实话作为一个有强迫症的人，这个方法不是很喜欢，因为这个方法拦截的是插入反屏蔽提示的过程
    // 然而作为一个有强迫症的人来说，到这里相当于Cnbeta已经知道这个事儿了。
    // 强迫症让我接受不了这样的事情，丫检测个屁啊，让你没法检测或检测不出才是心里可以接受的方法
    // 不过从这个方法里我知道了How to hook掉Node的方法，之前想这么干来着结果没时间去查怎么Hook掉DOM的原型
    // 
    // ===========================================================================================
    var ib = uw.Node.prototype.insertBefore;
    uw.Node.prototype.insertBefore = function(t, p) {
        if (t.tagName === 'DIV' && this.tagName === 'BODY' && t.querySelector('.mask-close')) {
            uw.Node.prototype.insertBefore = ib;
            return;
        }
        ib.apply(this, Array.prototype.slice.call(arguments));
    };
}).apply(unsafeWindow);