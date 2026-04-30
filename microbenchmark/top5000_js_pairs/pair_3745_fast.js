const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          return VAR_1 + VAR_2;
        };
        FUNCTION_1(1, Math.random());
    }
};