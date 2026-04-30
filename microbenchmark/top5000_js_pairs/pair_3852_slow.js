const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          return (VAR_4 = VAR_1[VAR_2]), VAR_4 === undefined ? VAR_3 : VAR_4;
        }
        var VAR_5 = { KEY_1: 1 };
        var VAR_6 = { KEY_2: 1 };
        var VAR_4;
        for (var VAR_7 = 0, VAR_8 = 0; VAR_7 < 1000; VAR_7++) {
          if (VAR_7 % 2) {
            VAR_8 += FUNCTION_1(VAR_6, "x", 42);
          } else {
            VAR_8 += FUNCTION_1(VAR_5, "y", 42);
          }
        }
    }
};