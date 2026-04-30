const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 <= 1; VAR_1 += 0.001) {
          VAR_2 = 1 - Math.pow(VAR_1, 2) / 2 + Math.pow(VAR_1, 4) / 24;
        }
    }
};