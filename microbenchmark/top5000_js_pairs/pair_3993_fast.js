const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3, VAR_4, VAR_5) {
          return (VAR_4 - VAR_1) * (VAR_4 - VAR_1) + (VAR_5 - VAR_2) * (VAR_5 - VAR_2) <= VAR_3 * VAR_3;
        }
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          for (var VAR_7 = 0; VAR_7 < 100; VAR_7++) {
            for (var VAR_8 = 1; VAR_8 < 10; VAR_8++) {
              FUNCTION_1(10, 10, VAR_8, VAR_6, VAR_7);
            }
          }
        }
    }
};