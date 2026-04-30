const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000);
        var FUNCTION_1 = function (VAR_3) {
          return VAR_3 * 2;
        };
        for (var VAR_5 in VAR_1) {
          VAR_1[VAR_6] = FUNCTION_1(VAR_1[VAR_5]);
        }
    }
};