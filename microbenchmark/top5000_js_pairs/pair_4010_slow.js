const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          VAR_1++;
          if (VAR_1 < 1000) FUNCTION_1(VAR_1);
        };
        FUNCTION_1(0);
    }
};