const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.push(0);
        }
        const VAR_4 = [];
        const FUNCTION_1 = function (VAR_3) {
          VAR_4.push(VAR_3 + 1);
        };
        VAR_1.forEach(FUNCTION_1);
    }
};