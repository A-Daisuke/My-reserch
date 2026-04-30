const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var FUNCTION_1 = function (VAR_4) {
          VAR_1.push(VAR_4);
        };
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.forEach(FUNCTION_1);
        }
    }
};