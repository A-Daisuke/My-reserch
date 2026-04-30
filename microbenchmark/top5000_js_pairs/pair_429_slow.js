const Benchmark = {
    run: function() {
        var VAR_1 = 10000000;
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 !== VAR_1; VAR_3++) {
          VAR_2 = (VAR_3 * VAR_3 * VAR_1) ^ (VAR_1 + 2 * 8);
        }
    }
};