const Benchmark = {
    run: function() {
        for (var VAR_1 = 100; VAR_1 <= 999; VAR_1++) {
          var VAR_2 = VAR_1.toString();
          var VAR_3 = parseInt(VAR_2[0]);
          var VAR_4 = parseInt(VAR_2[1]);
          var VAR_5 = parseInt(VAR_2[2]);
          var VAR_6 = VAR_3 * VAR_3 * VAR_3 + VAR_4 * VAR_4 * VAR_4 + VAR_5 * VAR_5 * VAR_5;
          if (VAR_6 == VAR_1) {
          }
        }
    }
};