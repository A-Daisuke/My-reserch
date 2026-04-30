const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = {};
        for (var VAR_3 = 0; VAR_3 <= 1000; VAR_3++) {
          VAR_2["p" + VAR_3] = VAR_3;
        }
        VAR_2[100] = 100;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_2["p" + VAR_4] = null;
        }
    }
};