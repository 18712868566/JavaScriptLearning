/* suning.com 1436372122860 */
!
function(e, t, i) {
    "undefined" != typeof module && module.exports ? module.exports = t(e, i) : "function" == typeof define && define.amd ? define(t(e, i)) : e.AlertBox = t.call(e, e, i)
} (this,
function(e, t) {
    "use strict";
    function i(e) {
        return this instanceof i ? (this.opts = e || {},
        this.uuid = a, this.type = this.opts.type || "doubleBtn", this.alertType = this.opts.alertType || "", this.alertCls = this.opts.alertCls || "", this.title = this.opts.title || "", this.msg = this.opts.msg || "", this.cancelText = this.opts.cancelText || "取消", this.confirmText = this.opts.confirmText || "确定", this.cancel = this.opts.cancel || "", this.confirm = this.opts.confirm || "", this.callback = this.opts.callback || "", void(this.delay = this.opts.delay || 2e3)) : new i(e).init()
    }
    var a = 0;
    return i.prototype = {
        constructor: i,
        getEl: function(e, t) {
            return e.querySelector(t)
        },
        init: function() {
            var e = this;
            a++,
            e.setStyle(),
            e.addAlertBox(),
            "mini" == e.type ? e.minEvent() : e.alertEvent()
        },
        addAlertBox: function() {
            var i = this,
            a = i.getPos();
            "fixed" == i.alertType ? i.getFixedMask() : i.getMask(),
            "fixed" == i.alertType ? i.getEl(t, "#alertMask_" + i.uuid).insertAdjacentHTML("beforeend", i.getHtml()) : i.getEl(t, "body").insertAdjacentHTML("beforeend", i.getHtml()),
            i.alertBox = i.getEl(t, "#alertBox_" + i.uuid),
            i.alertBox.style.cssText = "fixed" == i.alertType ? "width:" + parseInt(a.width - 50) + "px;left:25px;top:50%;-webkit-transform:translate3d(0,-50%,0);": "width:" + parseInt(a.width - 50) + "px;left:25px;top:" + parseInt(a.sTop + e.innerHeight / 2 - i.alertBox.offsetHeight / 2) + "px;",
            i.callback && "function" == typeof i.callback && "mini" != i.type && i.callback()
        },
        setStyle: function() {
            var e = this,
            i = t.createElement("style"),
            a = ".alert-box{position:absolute;left:0;top:0;border-radius:0.2rem;background:#FFF;-webkit-box-sizing:border-box;z-index:100;font-size:0.6rem;}.alert-msg{padding:0.4rem 0.6rem 0.6rem;text-align:center;line-height:1.8;word-break:break-all;}.alert-title{padding:0.6rem 0.6rem 0;text-align:center;}.alert-btn{display:-webkit-flex !important;display:-webkit-box;border-top:1px solid #DCDCDC;}.alert-btn a{display:block;-webkit-flex:1 !important;-webkit-box-flex:1;height:1.68rem;line-height:1.68rem;text-align:center;}.alert-btn a.alert-confirm{border-left:1px solid #DCDCDC;color:#94D754;}.alert-btn a.alert-confirm.single{border-left:none;}.alert-mini-box{border-radius:0.2rem;background:rgba(0,0,0,.7);color:#fff;}";
            i.type = "text/css",
            i.innerText = a,
            e.getEl(t, "head").appendChild(i)
        },
        getPos: function() {
            var i = t.documentElement.offsetWidth || t.body.offsetWidth,
            a = t.documentElement.offsetHeight || t.body.offsetHeight,
            l = t.documentElement.scrollTop || t.body.scrollTop;
            return e.innerHeight > a && (a = e.innerHeight),
            {
                width: i,
                height: a,
                sTop: l
            }
        },
        getHtml: function() {
            var e = this,
            t = "";
            if ("mini" != e.type) {
                switch (t += '<div class="alert-box ' + e.alertCls + '" id="alertBox_' + e.uuid + '"><div class="alert-title">' + e.title + '</div><div class="alert-msg">' + e.msg + '</div><div class="alert-btn">', e.type) {
                case "doubleBtn":
                    t += '<a href="javascript:;" class="alert-cancel mr10">' + e.cancelText + '</a><a href="javascript:;" class="alert-confirm">' + e.confirmText + "</a>";
                    break;
                case "onceCancel":
                    t += '<a href="javascript:;" class="alert-cancel">' + e.cancelText + "</a>";
                    break;
                case "onceConfirm":
                    t += '<a href="javascript:;" class="alert-confirm single">' + e.confirmText + "</a>"
                }
                t += "</div></div>"
            } else t += '<div class="alert-box alert-mini-box ' + e.alertCls + '"  id="alertBox_' + e.uuid + '"><div class="alert-msg">' + e.msg + "</div></div>";
            return t
        },
        getMask: function() {
            var e = this,
            i = e.getPos(),
            a = t.createElement("div");
            a.id = "alertMask_" + e.uuid,
            e.getEl(t, "body").appendChild(a),
            a.style.cssText = "position:absolute;left:0;top:0;width:" + i.width + "px;height:" + i.height + "px;background:rgba(0,0,0,0.3);z-index:99",
            "mini" == e.type && (a.style.backgroundColor = "rgba(255, 255, 255, 0)")
        },
        getFixedMask: function() {
            var e = this,
            i = t.createElement("div");
            i.id = "alertMask_" + e.uuid,
            e.getEl(t, "body").appendChild(i),
            i.style.cssText = "position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);z-index:99;"
        },
        minEvent: function() {
            var e = this;
            setTimeout(function() {
                navigator.userAgent.match(/iPhone/i) ? $(e.alertBox).fadeOut(500,
                function() {
                    e.getEl(t, "body").removeChild(e.alertBox),
                    e.callback && "function" == typeof e.callback && e.callback()
                }) : (e.remove(e.alertBox), e.callback && "function" == typeof e.callback && e.callback()),
                e.remove(e.getEl(t, "#alertMask_" + e.uuid))
            },
            e.delay)
        },
        alertEvent: function() {
            var e = this;
            if (e.alertBox) {
                var t = e.getEl(e.alertBox, ".alert-cancel"),
                i = e.getEl(e.alertBox, ".alert-confirm");
                t && e.reset(t, e.cancel),
                i && e.reset(i, e.confirm)
            }
        },
        reset: function(e, i) {
            var a = this;
            e.onclick = function() {
                i && "function" == typeof i && i(this),
                "fixed" != a.alertType && a.remove(a.alertBox),
                a.remove(a.getEl(t, "#alertMask_" + a.uuid))
            }
        },
        remove: function(e) {
            this.getEl(t, "body").removeChild(e)
        }
    },
    i
},
document);