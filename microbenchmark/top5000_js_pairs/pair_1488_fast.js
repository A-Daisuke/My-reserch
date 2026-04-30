const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000000; ++VAR_2) {
          VAR_2 = ~VAR_2 + 1;
          VAR_1 += VAR_2;
          VAR_1 = ~VAR_1 + 1;
          VAR_2 = ~VAR_2 + 1;
        }
    }
};