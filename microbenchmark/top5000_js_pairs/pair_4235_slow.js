const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 == 0) return 1;
          return VAR_1 * FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = 1;
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 *= VAR_3;
          }
          return VAR_5;
        }
        FUNCTION_2(2, 10000);
    }
};