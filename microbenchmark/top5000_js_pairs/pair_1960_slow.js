const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            eval("");
            VAR_1 += VAR_2;
          }
        }
        FUNCTION_1();
    }
};