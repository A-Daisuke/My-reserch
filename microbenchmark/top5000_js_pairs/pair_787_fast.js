const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = 0,
          VAR_4 = 100000,
          FUNCTION_1 = function (VAR_6) {
            VAR_2.push(VAR_6);
          };
        for (VAR_3; VAR_3 < VAR_4; VAR_3 += 1) {
          VAR_1.push(VAR_3);
        }
        VAR_1.forEach(FUNCTION_1);
    }
};