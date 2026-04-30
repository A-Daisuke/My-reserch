const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          return 2;
        };
        var VAR_3 = [],
          VAR_4 = FUNCTION_1();
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          VAR_3.push(VAR_4);
        }
    }
};