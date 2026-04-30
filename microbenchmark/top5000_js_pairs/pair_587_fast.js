const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2, VAR_10, VAR_11, VAR_12) {
          return VAR_2 + VAR_10 * VAR_11 - VAR_12;
        }
        for (var VAR_6 = 0; VAR_6 < 20; VAR_6++) {
          for (var VAR_7 = 0; VAR_7 < 20; VAR_7++) {
            for (var VAR_8 = 0; VAR_8 < 20; VAR_8++) {
              for (var VAR_9 = 0; VAR_9 < 20; VAR_9++) {
                VAR_1 += FUNCTION_1(VAR_6, VAR_7, VAR_8, VAR_9);
              }
            }
          }
        }
    }
};