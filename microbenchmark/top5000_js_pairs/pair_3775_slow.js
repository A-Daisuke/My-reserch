const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          if (VAR_1 === 0) return VAR_3;
          return FUNCTION_1(VAR_1 - 1, VAR_3 + VAR_2, VAR_2);
        };
        var VAR_4 = FUNCTION_1(1000, 1, 0);
    }
};