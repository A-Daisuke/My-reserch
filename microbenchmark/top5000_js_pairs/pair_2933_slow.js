const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        var VAR_1;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 = Object.prototype.toString.call(FUNCTION_1) === "[object Function]";
        }
    }
};