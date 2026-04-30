const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 50000,
          VAR_3;
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_3 = (8 / 3) | 0.5;
        }
    }
};