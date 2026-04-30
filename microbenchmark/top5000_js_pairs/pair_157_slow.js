const Benchmark = {
    run: function() {
        var VAR_1 = 34567.123445657686;
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2 = VAR_1.toFixed(2);
        }
    }
};