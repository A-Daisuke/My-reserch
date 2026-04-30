const Benchmark = {
    run: function() {
        var VAR_5 = 1000,
          VAR_6 = 0,
          VAR_7 = 0,
          VAR_8;
        if (VAR_5 > 1) {
          VAR_6 = 1;
          for (var VAR_9 = 1; VAR_9 < VAR_5; VAR_9++) {
            VAR_8 = VAR_7;
            VAR_7 = VAR_6;
            VAR_6 = VAR_7 + VAR_8;
          }
        }
    }
};