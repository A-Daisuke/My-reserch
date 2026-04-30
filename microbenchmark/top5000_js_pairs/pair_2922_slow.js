const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          parseInt(VAR_1 + "", 10);
        }
    }
};