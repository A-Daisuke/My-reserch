const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          return 3 + 3;
        };
        for (var VAR_2 = 0; VAR_2 < 4; VAR_2++) {
          for (var VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
            FUNCTION_1();
          }
        }
    }
};