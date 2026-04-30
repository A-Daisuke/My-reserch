const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_4) {
          for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
            VAR_4(VAR_1);
          }
        };
        var VAR_2 = 0;
        FUNCTION_1(function (VAR_5) {
          VAR_2 += VAR_5;
        });
    }
};