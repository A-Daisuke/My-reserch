const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          if (FUNCTION_1.VAR_1) {
            return FUNCTION_1.VAR_1;
          }
          FUNCTION_1.VAR_1 = new Date();
          return FUNCTION_1.VAR_1;
        }
        for (var VAR_2 = 0; VAR_2 <= 10000; VAR_2++) {
          FUNCTION_1();
        }
    }
};