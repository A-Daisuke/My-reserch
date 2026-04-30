const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_4) {
          VAR_1 += VAR_4;
        }
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          FUNCTION_1(VAR_2);
        }
    }
};