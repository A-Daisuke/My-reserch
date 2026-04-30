const Benchmark = {
    run: function() {
        for (var VAR_1 = -100; VAR_1 < 100; VAR_1 += 0.1) {
          VAR_2 = 1 / (1 + Math.pow(1000, -VAR_1));
        }
    }
};