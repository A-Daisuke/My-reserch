const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        for (var VAR_2 = 1; VAR_2 < 25000; VAR_2++) {
          VAR_1 = VAR_1 / 2;
        }
    }
};