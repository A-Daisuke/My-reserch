const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 == 1) {
            return VAR_1;
          } else {
            return FUNCTION_1(VAR_1 - 1) * VAR_1;
          }
        }
        function* FUNCTION_3(VAR_3) {
          if (VAR_3 == 1) {
            return VAR_3;
          } else {
            return FUNCTION_1(VAR_3 - 1) * VAR_3;
          }
        }
        FUNCTION_1(10);
    }
};