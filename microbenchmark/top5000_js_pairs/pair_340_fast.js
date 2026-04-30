const Benchmark = {
    run: function() {
        var VAR_1 = "1.0034562076923",
          VAR_2 = 0,
          VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
          VAR_3 = +VAR_1;
          VAR_2 += VAR_3;
        }
    }
};