const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_7 = ~~(VAR_1 / 100),
            VAR_8 = ~~((VAR_1 - VAR_7 * 100) / 10),
            VAR_9 = VAR_1 - VAR_7 * 100 - VAR_8 * 10,
            VAR_6 = VAR_7 * VAR_7 * VAR_7 + VAR_8 * VAR_8 * VAR_8 + VAR_9 * VAR_9 * VAR_9;
          if (VAR_6 == VAR_1) {
          }
        }
    }
};