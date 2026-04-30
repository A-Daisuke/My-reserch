const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return new Date().getTime();
        }
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_1();
        }
    }
};