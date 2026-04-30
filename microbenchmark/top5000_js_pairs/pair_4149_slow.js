const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_4 = 0;
        function FUNCTION_2(VAR_5, VAR_6, VAR_7) {
          VAR_4 += VAR_5 + VAR_6 + VAR_7;
        }
        for (var VAR_8 = 0; VAR_8 < VAR_1; VAR_8 += 1) {
          FUNCTION_2(1, -1, 1);
        }
        FUNCTION_1(VAR_4, VAR_1);
    }
};