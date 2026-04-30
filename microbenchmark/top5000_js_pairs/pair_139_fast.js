const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          VAR_2++;
        }
        for (var VAR_3 = 0; VAR_3 < 20000; VAR_3++) {
          FUNCTION_2.bind(null, 10)();
        }
    }
};