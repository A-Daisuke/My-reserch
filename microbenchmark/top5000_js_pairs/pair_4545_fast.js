const Benchmark = {
    run: function() {
        function FUNCTION_4() {
          return Math.random() + FUNCTION_5();
        }
        function FUNCTION_5() {
          return Math.random() + FUNCTION_6();
        }
        function FUNCTION_6() {
          return Math.random();
        }
        for (var VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          FUNCTION_4();
        }
    }
};