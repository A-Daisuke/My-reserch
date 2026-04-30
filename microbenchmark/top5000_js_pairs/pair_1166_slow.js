const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return 100 * VAR_1 * VAR_2 + 4;
        }
        function FUNCTION_2(VAR_3, VAR_4, VAR_5) {
          var VAR_6;
          for (var VAR_7 = 0; VAR_7 < VAR_3; VAR_7++) {
            for (var VAR_8 = 0; VAR_8 < VAR_4; VAR_8++) {
              VAR_6 = VAR_5(VAR_7, VAR_8);
            }
          }
        }
        FUNCTION_2(1000, 1000, FUNCTION_1);
    }
};