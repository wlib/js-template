(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define('jsTemplate', factory) :
            (global.jsTemplate = factory());
}(this, (function () {
    'use strict';
    var answer = function () { return 42; };
    var index = "The answer is " + answer() + "!";
    return index;
})));
