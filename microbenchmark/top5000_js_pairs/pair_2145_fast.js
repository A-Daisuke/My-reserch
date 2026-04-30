const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {}
        }
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1();
        }
    }
};