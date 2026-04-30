const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3) {
          VAR_3++;
        }
        for (var VAR_1 = 0; VAR_1 < 20000; VAR_1++) {
          FUNCTION_1.bind(null, 10)();
        }
    }
};