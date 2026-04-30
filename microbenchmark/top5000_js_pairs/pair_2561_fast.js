const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 <= 1; VAR_1 += 0.001) {
          VAR_2 = 1 - (VAR_1 * VAR_1) / 2 + (VAR_1 * VAR_1 * VAR_1 * VAR_1) / 24;
        }
    }
};