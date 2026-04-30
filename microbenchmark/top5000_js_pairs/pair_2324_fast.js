const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 < 2) {
            return 1;
          }
          return FUNCTION_2(0, 1, 1, VAR_1);
          function FUNCTION_2(VAR_2, VAR_3, VAR_4, VAR_5) {
            if (VAR_4 == VAR_5) {
              return VAR_3;
            }
            return FUNCTION_2(VAR_3, VAR_2 + VAR_3, VAR_4 + 1, VAR_5);
          }
        }
        FUNCTION_1(20);
    }
};