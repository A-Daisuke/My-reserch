const Benchmark = {
    run: function() {
        var VAR_1 = Array(2000)
          .fill(0)
          .map((VAR_2, VAR_3) => VAR_3);
        var VAR_4 = 0;
        for (j of VAR_1) {
          for (k of VAR_1) {
            VAR_4 = k;
          }
        }
    }
};