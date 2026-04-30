const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Math.round(VAR_1 * 100) / 100;
        }
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          FUNCTION_1(Math.random());
        }
    }
};