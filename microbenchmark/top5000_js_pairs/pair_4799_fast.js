const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 500;
        var FUNCTION_1 = function (VAR_3, VAR_4) {
          return VAR_3 + VAR_4 * Math.random();
        };
        for (; VAR_1 < VAR_2; ++VAR_1) {
          FUNCTION_1(VAR_1, VAR_1 * 2);
        }
    }
};