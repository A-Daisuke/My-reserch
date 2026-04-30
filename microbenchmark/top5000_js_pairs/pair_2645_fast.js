const Benchmark = {
    run: function() {
        function FUNCTION_3(VAR_5) {
          return parseInt(VAR_5, 10) + 10;
        }
        function FUNCTION_1(VAR_1, VAR_2) {
          return FUNCTION_3(VAR_1) + FUNCTION_3(VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_4, VAR_4 + 1);
        }
    }
};