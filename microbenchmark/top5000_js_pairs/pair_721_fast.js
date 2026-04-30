const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          Math.min(Math.floor(VAR_1 / 3) * 3, 9);
        }
    }
};