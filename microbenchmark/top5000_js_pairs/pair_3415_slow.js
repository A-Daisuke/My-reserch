const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          VAR_2 = VAR_2 || 1;
          if (VAR_1 <= 1) {
            return VAR_2;
          }
          return FUNCTION_1(VAR_1 - 1, VAR_1 * VAR_2);
        };
        FUNCTION_1(1000);
    }
};