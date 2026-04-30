const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 !== VAR_3) {
            throw new Error(`Not equals, actual:'${VAR_2}', expected '${VAR_3}'.`);
          }
        }
        var VAR_4 = {
          KEY_1: 0,
          KEY_2: function (VAR_10, VAR_11, VAR_12) {
            this.KEY_1 += VAR_10 + VAR_11 + VAR_12;
          },
        };
        for (var VAR_9 = 0; VAR_9 < VAR_1; VAR_9 += 1) {
          VAR_4.KEY_2(1, -1, 1);
        }
        FUNCTION_1(VAR_4.KEY_1, VAR_1);
    }
};