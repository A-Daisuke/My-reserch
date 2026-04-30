const Benchmark = {
    run: function() {
        var VAR_4 = 1;
        var VAR_5 = 0;
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          VAR_5 += VAR_4 + VAR_3;
        }
    }
};