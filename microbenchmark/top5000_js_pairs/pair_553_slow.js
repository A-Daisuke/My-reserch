const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            VAR_1 += VAR_2 ^ (VAR_3 + 1);
          }
        }
    }
};