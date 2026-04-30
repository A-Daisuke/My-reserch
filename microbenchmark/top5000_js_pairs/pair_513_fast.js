const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_11 = 0;
        var VAR_12 = (function (VAR_13) {
          return function () {
            VAR_13.apply(null, arguments);
          };
        })(function (VAR_14, VAR_15, VAR_16) {
          VAR_11 += VAR_14 + VAR_15 + VAR_16;
        });
        for (var VAR_10 = 0; VAR_10 < VAR_1; VAR_10 += 1) {
          VAR_12(1, -1, 1);
        }
        FUNCTION_1(VAR_11, VAR_1);
    }
};