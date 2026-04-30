const Benchmark = {
    run: function() {
        var VAR_1 = 30;
        function FUNCTION_1(VAR_2) {
          if (VAR_2 < 2) {
            return VAR_2;
          }
          return FUNCTION_1(VAR_2 - 1) + FUNCTION_1(VAR_2 - 2);
        }
        function FUNCTION_2(VAR_3) {
          for (var VAR_4 = 2, VAR_5 = 1, VAR_6 = 1, VAR_7; VAR_4 < VAR_3; VAR_4 += 1) {
            VAR_7 = VAR_6;
            VAR_6 = VAR_5 + VAR_6;
            VAR_5 = VAR_7;
          }
          return VAR_6;
        }
        FUNCTION_1(VAR_1);
    }
};