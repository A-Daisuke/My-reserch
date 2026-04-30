const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 10000;
        var VAR_4 = VAR_2 % 8;
        while (VAR_4--) {
          VAR_1++;
        }
        VAR_4 = parseInt(VAR_2 / 8);
        while (VAR_4--) {
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
          VAR_1++;
        }
    }
};