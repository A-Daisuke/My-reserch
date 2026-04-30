const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1++;
          if (VAR_1 > 4) {
            VAR_1 = 0;
          }
        }
    }
};