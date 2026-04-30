const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 0.5;
        for (var VAR_3 = 0; VAR_3 < 100000; ++VAR_3) {
          VAR_1 += ~~VAR_2;
          VAR_2 += 1;
        }
    }
};