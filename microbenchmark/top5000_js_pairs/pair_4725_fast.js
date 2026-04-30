const Benchmark = {
    run: function() {
        var VAR_2 = 0;
        for (var VAR_3 = 100; VAR_3 < 200; ++VAR_3) {
          for (var VAR_4 = 100; VAR_4 < 200; ++VAR_4) {
            VAR_2 += (VAR_3 - VAR_4) * (VAR_3 - VAR_4);
          }
        }
    }
};