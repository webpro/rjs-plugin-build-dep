(function(define) {
    define(function () {
        return 'myLib3';
    });
})(
    typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(); }
);
