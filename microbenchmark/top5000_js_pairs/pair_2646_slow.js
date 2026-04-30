const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 % 2 === 0;
        }
        function FUNCTION_2(VAR_2, VAR_3) {
          return VAR_2 * VAR_3;
        }
        function FUNCTION_3(VAR_4, VAR_5) {
          return VAR_4 + VAR_5;
        }
        function FUNCTION_4(VAR_6) {
          return (FUNCTION_1(VAR_6) ? FUNCTION_2 : FUNCTION_3)(VAR_6, VAR_6 + 1);
        }
        var VAR_7 = 0;
        for (var VAR_8 = 0; VAR_8 < 10000; ++VAR_8) {
          VAR_7 += FUNCTION_4(VAR_8);
        }
    }
};