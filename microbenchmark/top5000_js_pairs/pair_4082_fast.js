const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 0;
          VAR_1 = VAR_1 + 10;
        }
        function FUNCTION_4(VAR_5) {
          if (VAR_5) {
            VAR_5();
          }
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          FUNCTION_4(FUNCTION_1);
          FUNCTION_4();
        }
    }
};