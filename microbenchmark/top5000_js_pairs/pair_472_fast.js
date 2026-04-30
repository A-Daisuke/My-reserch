const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_10 = 0;
        var VAR_11 = (function (VAR_12) {
          return function () {
            VAR_12();
          };
        })(function () {
          VAR_10 += 1;
        });
        for (var VAR_9 = 0; VAR_9 < VAR_1; VAR_9 += 1) {
          VAR_11();
        }
        FUNCTION_1(VAR_10, VAR_1);
    }
};