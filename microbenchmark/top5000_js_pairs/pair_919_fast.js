const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        FUNCTION_1.prototype.FUNCTION_2 = function () {};
        var FUNCTION_3 = function () {};
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          FUNCTION_3.prototype["b" + VAR_1] = function () {};
        }
        new FUNCTION_1().FUNCTION_2();
    }
};