const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_3) {
          return VAR_3;
        };
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_2 = FUNCTION_1(VAR_1);
        }
    }
};