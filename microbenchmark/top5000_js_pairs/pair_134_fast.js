const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1++;
        }
        for (var VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          FUNCTION_1.bind(null, 10)();
        }
    }
};