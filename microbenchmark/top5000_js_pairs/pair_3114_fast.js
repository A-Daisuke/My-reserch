const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_3 = 0; VAR_3 < 262144; VAR_3 += 2) {
          VAR_1 = VAR_1 * 2;
          VAR_1 = VAR_1 * 2;
        }
    }
};