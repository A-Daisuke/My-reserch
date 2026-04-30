const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_4 = 0;
        var VAR_5 = (function (VAR_6) {
          return function (...VAR_7) {
            VAR_6(...VAR_7);
          };
        })(function (VAR_8, VAR_9, VAR_10) {
          VAR_4 += VAR_8 + VAR_9 + VAR_10;
        });
        for (var VAR_11 = 0; VAR_11 < VAR_1; VAR_11 += 1) {
          VAR_5(1, -1, 1);
        }
        FUNCTION_1(VAR_4, VAR_1);
    }
};