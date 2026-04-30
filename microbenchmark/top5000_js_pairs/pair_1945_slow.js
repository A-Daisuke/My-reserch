const Benchmark = {
    run: function() {
        var FUNCTION_1 = function* () {
          for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
            yield VAR_1;
          }
        };
        var VAR_2 = 0;
        for (var VAR_3 of FUNCTION_1()) {
          VAR_2 += VAR_3;
        }
    }
};