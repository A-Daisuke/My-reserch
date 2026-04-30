const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 % 2 === 0;
        }
        function FUNCTION_2(VAR_2) {
          return VAR_2 % 2 === 1;
        }
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          if (FUNCTION_1(VAR_3)) {
          } else if (FUNCTION_2(VAR_3)) {
          }
        }
    }
};