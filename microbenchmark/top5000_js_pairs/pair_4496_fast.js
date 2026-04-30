const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
          var VAR_2;
          for (var VAR_3 = 0; VAR_3 < 10; VAR_3++) {
            VAR_2 = 1 + VAR_2;
          }
        }
    }
};