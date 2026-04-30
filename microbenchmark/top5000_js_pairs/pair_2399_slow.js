const Benchmark = {
    run: function() {
        var VAR_1 = 100000,
          VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3 += 1) {
          if (VAR_3 % 10 === 0) {
            VAR_1 += 1;
          }
          VAR_2 += 1;
        }
    }
};