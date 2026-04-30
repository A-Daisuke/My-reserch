const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1() {
          for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {}
        }
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1();
        }
    }
};