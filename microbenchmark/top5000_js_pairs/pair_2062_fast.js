const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_2 = ~~(VAR_1 / 100),
            VAR_3 = ~~((VAR_1 - VAR_2 * 100) / 10),
            VAR_4 = VAR_1 - VAR_2 * 100 - VAR_3 * 10,
            VAR_5 = VAR_2 * VAR_2 * VAR_2 + VAR_3 * VAR_3 * VAR_3 + VAR_4 * VAR_4 * VAR_4;
          if (VAR_5 == VAR_1) {
          }
        }
    }
};