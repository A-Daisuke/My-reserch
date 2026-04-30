const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_2 = ~~(VAR_1 / 100),
            VAR_6 = ~~(VAR_1 / 10) % 10,
            VAR_7 = VAR_1 % 10,
            VAR_8 = VAR_2 * VAR_2 * VAR_2 + VAR_6 * VAR_6 * VAR_6 + VAR_7 * VAR_7 * VAR_7;
          if (VAR_8 == VAR_1) {
          }
        }
    }
};