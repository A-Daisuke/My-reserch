const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_4) {
          return VAR_4 * 2;
        }
        for (var VAR_1 = 0, VAR_2 = 100000; VAR_1 < VAR_2; VAR_1++) {
          FUNCTION_1(VAR_1);
        }
    }
};