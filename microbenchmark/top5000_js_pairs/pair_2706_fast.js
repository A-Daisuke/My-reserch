const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_4 = 0;
        var VAR_5 = (function (VAR_11) {
          return function () {
            VAR_11();
          };
        })(function () {
          VAR_4 += 1;
        });
        for (var VAR_10 = 0; VAR_10 < VAR_1; VAR_10 += 1) {
          VAR_5();
        }
        FUNCTION_1(VAR_4, VAR_1);
    }
};