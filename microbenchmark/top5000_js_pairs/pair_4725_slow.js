const Benchmark = {
    run: function() {
        var FUNCTION_1 = function FUNCTION_1(VAR_1) {
          return VAR_1 * VAR_1;
        };
        var VAR_2 = 0;
        for (var VAR_3 = 100; VAR_3 < 200; ++VAR_3) {
          for (var VAR_4 = 100; VAR_4 < 200; ++VAR_4) {
            VAR_2 += FUNCTION_1(VAR_3 - VAR_4, 2);
          }
        }
    }
};