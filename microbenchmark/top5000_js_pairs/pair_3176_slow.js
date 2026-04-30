const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_2.push(VAR_1);
        }
        var VAR_3 = 0;
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_3 += VAR_2[VAR_1];
        }
    }
};