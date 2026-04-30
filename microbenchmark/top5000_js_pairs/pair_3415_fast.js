const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_3 = 1;
          if (VAR_1 <= 1) {
            return 1;
          }
          for (var VAR_4 = 2; VAR_4 <= VAR_1; VAR_4++) {
            VAR_3 *= VAR_4;
          }
          return VAR_3;
        };
        FUNCTION_1(1000);
    }
};