const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000);
        for (var VAR_2 = 0; VAR_2 < VAR_1.VAR_3; VAR_2++) {
          VAR_1[VAR_4] = VAR_2;
        }
        var FUNCTION_1 = function (VAR_5) {
          return VAR_2 * 2;
        };
        var VAR_3 = VAR_1.VAR_3;
        for (var VAR_6 = 0; VAR_2 < VAR_1.VAR_3; VAR_2++) {
          VAR_1[VAR_7] = FUNCTION_1(VAR_1[VAR_2]);
        }
    }
};