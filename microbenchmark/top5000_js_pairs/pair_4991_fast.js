const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          function FUNCTION_2(VAR_2) {
            return VAR_1 + VAR_2;
          }
          if (VAR_1 == 1) return 1;
          else return FUNCTION_2(FUNCTION_1(VAR_1 - 1));
        }
        function FUNCTION_4(VAR_4, VAR_5) {
          return VAR_4 + VAR_5;
        }
        function FUNCTION_3(VAR_3) {
          if (VAR_3 == 1) return 1;
          else return FUNCTION_4(VAR_3, FUNCTION_3(VAR_3 - 1));
        }
        FUNCTION_3(500);
    }
};