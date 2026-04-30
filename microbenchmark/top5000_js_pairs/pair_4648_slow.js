const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
            VAR_1 = Math.min(VAR_2, Math.sqrt(VAR_2));
            if (VAR_1 < 1000) {
              VAR_1 = VAR_2;
            } else if (VAR_1 > 2000) {
              VAR_1 = VAR_2 + 1000;
            }
          }
        };
        FUNCTION_1();
    }
};