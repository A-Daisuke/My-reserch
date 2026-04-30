const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_3 = new Array(100000);
        for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          VAR_2 = VAR_3[VAR_1];
        }
    }
};