const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Math.floor(VAR_1 / 3);
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};