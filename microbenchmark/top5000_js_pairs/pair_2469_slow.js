const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          VAR_1["p" + VAR_2] = VAR_2;
        }
        VAR_1[100] = 100;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1["p" + VAR_3] = null;
        }
    }
};