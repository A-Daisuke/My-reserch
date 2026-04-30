const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2;
        while (VAR_1 < 1000) {
          if (VAR_2 === undefined) {
            VAR_1++;
          }
        }
    }
};