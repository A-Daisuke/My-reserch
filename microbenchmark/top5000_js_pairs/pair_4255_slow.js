const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = 1;
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_3 *= VAR_1;
          }
          return VAR_3;
        }
        function FUNCTION_2(VAR_5, VAR_6) {
          return Math.pow(VAR_5, VAR_6);
        }
        FUNCTION_1(2, 10000);
    }
};