const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (!VAR_1) {
            return "Ho!";
          }
          return VAR_1.replace(/!/g, " ") + "Ho!";
        }
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1()))));
        }
    }
};