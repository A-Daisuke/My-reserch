const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var FUNCTION_1 = function () {
          return 2;
        };
        var VAR_2 = Array.apply(null, Array(VAR_1)).map(Number.prototype.valueOf, FUNCTION_1());
    }
};