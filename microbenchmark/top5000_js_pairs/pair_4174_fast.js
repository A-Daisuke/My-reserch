const Benchmark = {
    run: function() {
        function FUNCTION_3(VAR_3) {
          function FUNCTION_4(VAR_4, VAR_5) {
            return VAR_4 + VAR_5;
          }
          if (VAR_3 == 1) return 1;
          else return FUNCTION_4(VAR_3, FUNCTION_3(VAR_3 - 1));
        }
        function FUNCTION_5(VAR_6, VAR_7) {
          return VAR_6 + VAR_7;
        }
        function FUNCTION_1(VAR_1) {
          if (VAR_1 == 1) return 1;
          else return FUNCTION_5(VAR_1, FUNCTION_1(VAR_1 - 1));
        }
        FUNCTION_1(500);
    }
};