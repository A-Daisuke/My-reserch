const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (VAR_1 <= 1) {
            return 1;
          }
          return VAR_1 * FUNCTION_1(VAR_1 - 1);
        };
        FUNCTION_1(1000);
    }
};