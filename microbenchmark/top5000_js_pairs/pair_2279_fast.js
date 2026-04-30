const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          VAR_1 += VAR_2;
        }
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          FUNCTION_1.bind(null, VAR_5)();
        }
    }
};