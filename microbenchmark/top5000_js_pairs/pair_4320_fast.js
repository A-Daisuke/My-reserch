const Benchmark = {
    run: function() {
        for (var VAR_1 = -10000; VAR_1 < 10000; ++VAR_1) {
          var VAR_2 = Math.max(0, Math.min(1000, VAR_1));
        }
    }
};