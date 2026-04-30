const Benchmark = {
    run: function() {
        var VAR_9, VAR_10, VAR_11;
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          for (var VAR_8 = 0; VAR_8 < 1000; VAR_8++) {
            VAR_9 = 100 * VAR_7 * VAR_8;
            VAR_11 = VAR_9 + 4;
          }
        }
    }
};