const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2 = new Date().getTime(),
          VAR_3 = "1",
          VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_4 += VAR_3 * 1;
        }
    }
};