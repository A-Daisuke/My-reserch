const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return parseFloat(VAR_1 + "e" + VAR_2);
        }
        function FUNCTION_2(VAR_3) {
          for (var VAR_4 = 0, VAR_5 = 0; VAR_5 < 100; VAR_5++) {
            var VAR_6 = Math.random();
            for (var VAR_7 = -200; VAR_7 < 200; VAR_7++) {
              var VAR_8 = VAR_3(VAR_6, VAR_7);
            }
          }
        }
        FUNCTION_2(FUNCTION_1);
    }
};