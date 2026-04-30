const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          VAR_1 = "00000" + VAR_1;
          return VAR_1.substring(VAR_1.length - VAR_2, VAR_1.length);
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_4, 4);
        }
    }
};