const Benchmark = {
    run: function() {
        var VAR_1 = 111112,
          VAR_2 = 0,
          VAR_4 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3 += 1) {
          if (VAR_3 % 10 === 0) {
            VAR_4 += 1;
          }
          VAR_2 += 1;
        }
    }
};