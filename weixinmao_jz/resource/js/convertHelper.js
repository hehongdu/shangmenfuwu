var ConvertHelper = {};

!function(_) {
    _.ToInt = function(t) {
        var e = parseInt(t);
        return isNaN(e) && (e = 0), e;
    }, _.ToFloat = function(t) {
        var e = parseFloat(t);
        return isNaN(e) && (e = 0), e;
    }, _.ToString = function(t) {
        return t;
    }, _.ToDateTime = function(t) {
        return t.indexOf("T") >= 0 ? new Date(t) : new Date(t.replace(/-/g, "/"));
    }, _.ToDateForJson = function(obj, format) {
        var date = eval(obj.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
        return date && date instanceof Date ? format ? date.format(format) : date.format("yyyy-MM-dd") : void 0;
    }, _.ToDateTimeForJson = function(obj, format) {
        var date = eval(obj.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
        return date.format(format);
    }, _.PadLeft = function(t, e) {
        for (var r = t.toString().length; r < e; ) t = "0" + t, r++;
        return t;
    }, _.GetEllipsisString = function(t, e) {
        return t.length > e && (t = t.substr(0, e) + "..."), t;
    };
}(ConvertHelper), module.exports = {
    toInt: ConvertHelper.ToInt,
    toFloat: ConvertHelper.ToFloat,
    toString: ConvertHelper.ToString,
    toDateTime: ConvertHelper.ToDateTime,
    padLeft: ConvertHelper.PadLeft,
    getEllipsisString: ConvertHelper.GetEllipsisString
};