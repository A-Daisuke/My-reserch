const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = VAR_1 > 0 ? { KEY_1: FUNCTION_1((VAR_1 - 1) | 0, VAR_2) } : 0,
            VAR_4 = VAR_1 > 0 && 0 === (VAR_1 % 2 | 0) ? { KEY_2: FUNCTION_1((VAR_1 - 1) | 0, VAR_2) } : 0;
          return {
            KEY_3: VAR_2(VAR_1),
            KEY_4: VAR_4,
            KEY_5: VAR_3,
          };
        }
        function FUNCTION_2(VAR_5) {
          return VAR_5;
        }
        FUNCTION_1(28, FUNCTION_2);
    }
};