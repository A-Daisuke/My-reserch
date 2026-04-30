const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2, VAR_6, VAR_7) {
          return VAR_2 + VAR_6 + VAR_7;
        }
        function FUNCTION_1(VAR_1) {
          return VAR_1.VAR_2 + VAR_1.VAR_6 + VAR_1.VAR_7;
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          FUNCTION_2(VAR_4, VAR_4, VAR_4);
        }
    }
};