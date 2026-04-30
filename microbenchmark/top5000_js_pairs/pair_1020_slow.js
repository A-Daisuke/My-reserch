const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return [VAR_1 * 100, VAR_2 * 10];
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          VAR_3 - VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5 += 1)
          for (var VAR_6 = 0; VAR_6 < 1000; VAR_6 += 1) {
            let [VAR_7, VAR_8] = FUNCTION_1(VAR_5, VAR_6);
            FUNCTION_2(VAR_7, VAR_8);
          }
    }
};