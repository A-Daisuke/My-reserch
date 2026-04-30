const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (VAR_1 < 1) {
            throw new Exception("something wrong!");
          } else if (1 === VAR_1 || 2 === VAR_1) {
            return 1;
          } else {
            return FUNCTION_1(VAR_1 - 1) + FUNCTION_1(VAR_1 - 2);
          }
        };
        FUNCTION_1(25);
    }
};