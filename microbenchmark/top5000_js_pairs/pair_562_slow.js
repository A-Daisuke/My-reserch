const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 30;
        var FUNCTION_1 = function (VAR_3) {
          if (VAR_3 < 0) {
            return NaN;
          } else if (VAR_3 == 0) {
            return 0;
          } else if (VAR_3 < 3) {
            return 1;
          }
          return FUNCTION_1(VAR_3 - 1) + FUNCTION_1(VAR_3 - 2);
        };
        for (var VAR_4 = VAR_1; VAR_4 < VAR_2; VAR_4++) {
          FUNCTION_1(VAR_4);
        }
    }
};