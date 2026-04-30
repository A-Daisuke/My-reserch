const Benchmark = {
    run: function() {
        var VAR_1 = 30;
        function FUNCTION_1(VAR_2, VAR_3, VAR_4) {
          if (VAR_4 < 3) {
            return VAR_3;
          }
          return FUNCTION_1(VAR_3, VAR_2 + VAR_3, VAR_4 - 1);
        }
        function FUNCTION_2(VAR_5) {
          for (var VAR_6 = 2, VAR_7 = 1, VAR_8 = 1, VAR_9; VAR_6 < VAR_5; VAR_6 += 1) {
            VAR_9 = VAR_8;
            VAR_8 = VAR_7 + VAR_8;
            VAR_7 = VAR_9;
          }
          return VAR_8;
        }
        FUNCTION_2(VAR_1);
    }
};