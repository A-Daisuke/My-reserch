const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1() {
          for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
            VAR_1 = VAR_2;
          }
        }
        FUNCTION_1();
    }
};