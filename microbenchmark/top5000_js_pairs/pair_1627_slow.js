const Benchmark = {
    run: function() {
        var VAR_1 = 15.7645,
          VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3 += 1) {
          VAR_2 = parseInt(VAR_1, 10);
        }
    }
};