const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          VAR_1 += VAR_2;
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          return function () {
            FUNCTION_1(VAR_4);
          };
        }
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          FUNCTION_2(FUNCTION_1, VAR_5)();
        }
    }
};