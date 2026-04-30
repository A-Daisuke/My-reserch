const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var FUNCTION_1 = function (VAR_3) {
          VAR_1.push(VAR_3);
        };
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_2.forEach(FUNCTION_1);
        }
    }
};