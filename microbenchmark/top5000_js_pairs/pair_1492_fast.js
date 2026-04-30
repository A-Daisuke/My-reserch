const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 262144; VAR_2 += 2) {
          VAR_1 = VAR_1 * 4;
        }
    }
};