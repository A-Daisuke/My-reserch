const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_4, VAR_5) {
          return VAR_4 + VAR_5;
        }
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          FUNCTION_1(VAR_1, VAR_1 + 1);
        }
    }
};