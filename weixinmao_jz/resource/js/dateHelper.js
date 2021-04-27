var e = {};

!function(e) {
    e.getWeekDateTxt = function(e) {
        var t = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], a = e;
        return "string" == typeof a && (a.indexOf(".") >= 0 && (a = a.substr(0, a.indexOf("."))), 
        a = new Date(a.replace(/-/g, "/").replace(/T/g, " "))), a ? t[a.getDay()] : "";
    }, e.diffDay = function(e, t) {
        try {
            var a, i;
            return e instanceof Date ? a = e.getTime() : (e.indexOf(".") >= 0 && (e = e.substr(0, e.indexOf("."))), 
            a = new Date(e.replace(/-/g, "/").replace(/T/g, " ")).getTime()), t instanceof Date ? i = t.getTime() : (t.indexOf(".") >= 0 && (t = t.substr(0, t.indexOf("."))), 
            i = new Date(t.replace(/-/g, "/").replace(/T/g, " ")).getTime()), (i - a) / 864e5;
        } catch (e) {
            return "";
        }
    }, e.diffHour = function(e, t) {
        try {
            var a, i;
            return e instanceof Date ? a = e.getTime() : (e.indexOf(".") >= 0 && (e = e.substr(0, e.indexOf("."))), 
            a = new Date(e.replace(/-/g, "/").replace(/T/g, " ")).getTime()), t instanceof Date ? i = t.getTime() : (t.indexOf(".") >= 0 && (t = t.substr(0, t.indexOf("."))), 
            i = new Date(t.replace(/-/g, "/").replace(/T/g, " ")).getTime()), (i - a) / 1e3;
        } catch (e) {
            return "";
        }
    }, e.diffMinute = function(e, t) {
        try {
            var a, i;
            return e instanceof Date ? a = e.getTime() : (e.indexOf(".") >= 0 && (e = e.substr(0, e.indexOf("."))), 
            a = new Date(e.replace(/-/g, "/").replace(/T/g, " ")).getTime()), t instanceof Date ? i = t.getTime() : (t.indexOf(".") >= 0 && (t = t.substr(0, t.indexOf("."))), 
            i = new Date(t.replace(/-/g, "/").replace(/T/g, " ")).getTime()), (i - a) / 6e4;
        } catch (e) {
            return "";
        }
    }, e.diffSecond = function(e, t) {
        var a, i;
        return e instanceof Date ? a = e.getTime() : (e.indexOf(".") >= 0 && (e = e.substr(0, e.indexOf("."))), 
        a = new Date(e.replace(/-/g, "/").replace(/T/g, " ")).getTime()), t instanceof Date ? i = t.getTime() : (t.indexOf(".") >= 0 && (t = t.substr(0, t.indexOf("."))), 
        i = new Date(t.replace(/-/g, "/").replace(/T/g, " ")).getTime()), (i - a) / 1e3;
    }, e.prevDay = function(e) {
        return e = new Date(e), e = +e - 864e5, (e = new Date(e)).getFullYear() + "-" + this.addZero(e.getMonth() + 1) + "-" + this.addZero(e.getDate());
    }, e.nextDay = function(e) {
        return e = new Date(e), e = +e + 864e5, (e = new Date(e)).getFullYear() + "-" + this.addZero(e.getMonth() + 1) + "-" + this.addZero(e.getDate());
    }, e.addMinutes = function(e, t) {
        "string" == typeof e && (e.indexOf(".") >= 0 && (e = e.substr(0, e.indexOf("."))), 
        e = new Date(e.replace(/-/g, "/").replace(/T/g, " "))), t = t || 0;
        var a = new Date(e.getTime());
        return a.setMinutes(a.getMinutes() + t), a;
    }, e.addDays = function(e, t) {
        t = t || 0;
        var a = new Date(e.getTime());
        return a.setDate(a.getDate() + t), a;
    }, e.addZero = function(e) {
        return e < 10 ? "0" + e : e;
    }, e.monthAndDay = function(e) {
        return e = new Date(e), this.addZero(e.getMonth() + 1) + "月" + this.addZero(e.getDate()) + "日";
    }, e.formatDate = function(e, t) {
        "string" == typeof e && ((e = e.replace(/-/g, "/").replace(/T/g, " ")).indexOf(".") > 0 && (e = e.substring(0, e.indexOf("."))), 
        e = new Date(e));
        var a = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "H+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var i in a) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? a[i] : ("00" + a[i]).substr(("" + a[i]).length)));
        return t;
    }, e.formatWechatDate = function(e) {
        "string" == typeof e && ((e = e.replace(/-/g, "/").replace(/T/g, " ")).indexOf(".") > 0 && (e = e.substring(0, e.indexOf("."))), 
        e = new Date(e));
        var t = new Date(this.formatDate(new Date(), "yyyy/MM/dd")), a = this.formatDate(e, "yyyy-MM-dd") == this.formatDate(new Date(), "yyyy-MM-dd"), i = this.formatDate(e, "yyyy-MM-dd") == this.formatDate(this.addDays(t, -1), "yyyy-MM-dd"), n = this.diffDay(e, t);
        return a ? this.formatDate(e, "HH:mm") : i ? "昨天" : n <= 7 ? this.getWeekDateTxt(e) : this.formatDate(e, "yyyy-MM-dd");
    }, e.formatWechatMessageDate = function(e) {
        "string" == typeof e && ((e = e.replace(/-/g, "/").replace(/T/g, " ")).indexOf(".") > 0 && (e = e.substring(0, e.indexOf("."))), 
        e = new Date(e));
        var t = new Date(this.formatDate(new Date(), "yyyy/MM/dd")), a = this.formatDate(e, "yyyy-MM-dd") == this.formatDate(new Date(), "yyyy-MM-dd"), i = this.formatDate(e, "yyyy-MM-dd") == this.formatDate(this.addDays(t, -1), "yyyy-MM-dd"), n = this.diffDay(e, t);
        return a ? this.formatDate(e, "HH:mm") : i ? "昨天" + this.formatDate(e, " HH:mm") : n <= 7 ? this.getWeekDateTxt(e) + this.formatDate(e, " HH:mm") : this.formatDate(e, "yyyy-MM-dd HH:mm");
    }, e.formatActiveTime = function(e) {
        "string" == typeof e && ((e = e.replace(/-/g, "/").replace(/T/g, " ")).indexOf(".") > 0 && (e = e.substring(0, e.indexOf("."))), 
        e = new Date(e));
        var t = new Date();
        return this.diffMinute(e, t) <= 1 ? "一分钟前" : this.diffMinute(e, t) <= 2 ? "两分钟前" : this.diffMinute(e, t) <= 3 ? "三分钟前" : this.diffMinute(e, t) <= 5 ? "五分钟前" : this.diffMinute(e, t) <= 10 ? "十分钟前" : this.diffMinute(e, t) <= 30 ? "半小时前" : this.diffHour(e, t) <= 1 ? "一小时前" : this.diffHour(e, t) <= 2 ? "两小时前" : this.diffHour(e, t) <= 3 ? "三小时前" : this.diffHour(e, t) <= 5 ? "五小时前" : this.diffDay(e, t) <= 1 ? "一天前" : this.diffDay(e, t) <= 2 ? "两天前" : this.diffDay(e, t) <= 3 ? "三天前" : this.diffDay(e, t) <= 4 ? "四天前" : this.diffDay(e, t) <= 5 ? "五天前" : this.diffDay(e, t) <= 6 ? "六天前" : this.diffDay(e, t) <= 7 ? "一周前" : this.diffDay(e, t) <= 14 ? "两周前" : this.diffDay(e, t) <= 21 ? "三周前" : this.diffDay(e, t) <= 28 ? "四周前" : void (result = "一月前");
    };
}(e), module.exports = {
    getWeekDateTxt: e.getWeekDateTxt,
    diffDay: e.diffDay,
    diffHour: e.diffHour,
    diffMinute: e.diffMinute,
    diffSecond: e.diffSecond,
    prevDay: e.prevDay,
    nextDay: e.nextDay,
    addMinutes: e.addMinutes,
    addDays: e.addDays,
    addZero: e.addZero,
    monthAndDay: e.monthAndDay,
    formatDate: e.formatDate,
    formatWechatDate: e.formatWechatDate,
    formatWechatMessageDate: e.formatWechatMessageDate,
    formatActiveTime: e.formatActiveTime
};