const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_3 = 0;
        for (;;) {
          VAR_1 = VAR_3++;
          if (VAR_3 > 500) break;
        }
    }
};