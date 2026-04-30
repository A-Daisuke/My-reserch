const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_3 = 50000,
          VAR_4 = VAR_3 % 8;
        if (VAR_4 > 0) {
          do {
            VAR_1++;
          } while (--VAR_4);
        }
        VAR_4 = parseInt(VAR_3 / 8);
        do {
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
        } while (--VAR_4);
    }
};