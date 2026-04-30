const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          VAR_1 += VAR_2;
        }
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          (function (VAR_4, VAR_5) {
            return function () {
              FUNCTION_1(VAR_3);
            };
          })(FUNCTION_1, VAR_3)();
        }
    }
};