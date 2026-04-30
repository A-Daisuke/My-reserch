const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return {
            KEY_1: VAR_1 * 100,
            KEY_2: VAR_2 * 10,
          };
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          VAR_3 - VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5 += 1)
          for (var VAR_6 = 0; VAR_6 < 1000; VAR_6 += 1) {
            let { VAR_9, VAR_10 } = FUNCTION_1(VAR_5, VAR_6);
            FUNCTION_2(VAR_9, VAR_10);
          }
    }
};