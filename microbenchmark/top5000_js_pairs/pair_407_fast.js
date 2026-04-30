const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var FUNCTION_1 = function (VAR_3) {
          VAR_1 += VAR_3 * VAR_3;
        };
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};