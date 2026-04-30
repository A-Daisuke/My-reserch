const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return [];
        }
        function FUNCTION_2() {
          return new Array(32);
        }
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_2();
        }
    }
};