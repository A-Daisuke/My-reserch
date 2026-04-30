const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 * 250;
        }
        function FUNCTION_2(VAR_2) {
          return VAR_2 * 500;
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          FUNCTION_1(VAR_6);
          FUNCTION_2(VAR_6);
        }
    }
};