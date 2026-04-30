const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function (VAR_2, VAR_3) {
            return VAR_2 + VAR_1 + VAR_3;
          };
        }
        function FUNCTION_2(VAR_6) {
          return [VAR_6].reduce(FUNCTION_1(VAR_6), 0);
        }
        for (var VAR_4 = 0, VAR_5 = 0; VAR_4 < 1000000; VAR_4++) VAR_5 += FUNCTION_2(VAR_4);
    }
};