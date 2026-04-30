const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        function FUNCTION_1() {
          for (VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
            VAR_2 += VAR_1;
          }
        }
        FUNCTION_1();
    }
};