const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return "aa";
        }
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          if (FUNCTION_1() === "aa") {
          }
        }
    }
};