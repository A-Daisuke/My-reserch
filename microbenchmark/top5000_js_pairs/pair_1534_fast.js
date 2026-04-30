const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_3 = 262144 | 0;
        while (VAR_3 > 0) {
          VAR_1 = VAR_1 * 2;
          VAR_3 = VAR_3 - 1;
        }
    }
};