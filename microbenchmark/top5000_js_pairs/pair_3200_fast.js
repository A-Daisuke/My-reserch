const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return arguments[0] ? "Ho " + arguments[0] : "Ho!";
        }
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1(FUNCTION_1()))));
        }
    }
};