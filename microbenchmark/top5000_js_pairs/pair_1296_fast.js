const Benchmark = {
    run: function() {
        var VAR_1 = 1 >> 0;
        var VAR_2 = 0 >> 0;
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          VAR_2 = (VAR_2 + VAR_3) >> 0;
          VAR_1 = (VAR_1 + 1) >> 0;
        }
    }
};