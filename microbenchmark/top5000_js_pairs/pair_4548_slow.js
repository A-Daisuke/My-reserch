const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var FUNCTION_1 = function (VAR_3, VAR_4) {
          return VAR_3 + VAR_4;
        };
        VAR_1.reduce(FUNCTION_1, 0);
    }
};