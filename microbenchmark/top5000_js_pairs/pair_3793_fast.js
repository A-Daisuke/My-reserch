const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = 1;
          if (VAR_1 <= 1) {
            return 1;
          }
          for (var VAR_3 = 2; VAR_3 <= VAR_1; VAR_3++) {
            VAR_2 *= VAR_3;
          }
          return VAR_2;
        };
        FUNCTION_1(1000);
    }
};