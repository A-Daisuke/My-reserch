const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 ? "Ho ".concat(VAR_1) : "Ho!";
        }
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1()))));
        }
    }
};