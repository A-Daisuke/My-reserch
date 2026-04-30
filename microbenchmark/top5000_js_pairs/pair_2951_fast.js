const Benchmark = {
    run: function() {
        var VAR_1 = "1 + 2";
        var FUNCTION_1 = function () {
          return 1 + 2;
        };
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1();
        }
    }
};