const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 20,
          VAR_3 = 10000;
        var FUNCTION_1 = function (VAR_4) {
          if (VAR_4 <= 1) return 1;
          return VAR_4 * FUNCTION_1(VAR_4 - 1);
        };
        for (var VAR_5 = 0; VAR_5 < VAR_3; VAR_5 += 1) {
          VAR_1 = FUNCTION_1(VAR_2);
        }
    }
};