const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 262144 | 0;
        while (VAR_2 > 0) {
          VAR_1 = VAR_1 * 2;
          VAR_2 = VAR_2 - 1;
        }
    }
};