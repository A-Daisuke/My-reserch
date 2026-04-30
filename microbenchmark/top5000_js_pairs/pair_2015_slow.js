const Benchmark = {
    run: function() {
        for (VAR_1 = 2000; VAR_1 < 3001; VAR_1++) {
          new Date(VAR_1, 2, 0).getDate() === 29;
        }
    }
};