const Benchmark = {
    run: function() {
        VAR_1 = 1000 * 1000;
        var VAR_5 = (function () {
          function FUNCTION_2() {
            var VAR_2 = 1;
            var VAR_3 = 2;
            return VAR_2 + VAR_3;
          }
          return function () {
            FUNCTION_2();
          };
        })();
        for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          VAR_5();
        }
    }
};