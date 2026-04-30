const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_6 = VAR_1.toString();
          var VAR_7 = parseInt(VAR_6[0]);
          var VAR_8 = parseInt(VAR_6[1]);
          var VAR_9 = parseInt(VAR_6[2]);
          var VAR_10 = VAR_7 * VAR_7 * VAR_7 + VAR_8 * VAR_8 * VAR_8 + VAR_9 * VAR_9 * VAR_9;
          if (VAR_10 == VAR_1) {
          }
        }
    }
};