const Benchmark = {
    run: function() {
        for (var VAR_1 = -100; VAR_1 < 100; VAR_1 += 0.1) {
          var VAR_3 = VAR_1 < 0 ? 0 : VAR_1 > 1 ? 1 : 3 * VAR_1 * VAR_1 - 2 * VAR_1 * VAR_1 * VAR_1;
        }
    }
};