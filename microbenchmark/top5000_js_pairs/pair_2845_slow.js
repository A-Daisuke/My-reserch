const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          parseInt("" + VAR_1, 10) + parseInt("" + VAR_1, 10) > 0;
        }
    }
};