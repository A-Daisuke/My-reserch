const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_2 = Math.floor(VAR_1 / 100),
            VAR_3 = Math.floor((VAR_1 - VAR_2 * 100) / 10),
            VAR_4 = VAR_1 - VAR_2 * 100 - VAR_3 * 10,
            VAR_5 = Math.pow(VAR_2, 3) + Math.pow(VAR_3, 3) + Math.pow(VAR_4, 3);
          if (VAR_5 == VAR_1) {
          }
        }
    }
};