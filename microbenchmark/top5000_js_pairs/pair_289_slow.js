const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 0;
        for (VAR_1 = 0; VAR_1 < 10000000; VAR_1++) {
          VAR_2 += VAR_1 / 2;
        }
    }
};