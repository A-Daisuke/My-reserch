const Benchmark = {
    run: function() {
        var VAR_1 = 100,
          VAR_2 = 125,
          VAR_3 = 1000000,
          VAR_5;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4 += 1) {
          VAR_5 = VAR_1;
          VAR_1 = VAR_2;
          VAR_2 = VAR_5;
        }
    }
};