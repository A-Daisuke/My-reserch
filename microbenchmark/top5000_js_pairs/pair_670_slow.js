const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          ([1, 1, 1, 4, 4, 4, 7, 7, 7][VAR_1] || 10) - 1;
        }
    }
};