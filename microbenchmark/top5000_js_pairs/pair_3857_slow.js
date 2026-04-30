const Benchmark = {
    run: function() {
        var VAR_1 = 8;
        var VAR_2 = 2000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; ++VAR_3) {
          var VAR_4 = 0;
          for (var VAR_5 = 0; VAR_5 < VAR_1; ++VAR_5) {
            VAR_4 |= 1 << VAR_5;
          }
        }
    }
};