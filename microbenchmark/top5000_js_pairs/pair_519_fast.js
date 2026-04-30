const Benchmark = {
    run: function() {
        for (var VAR_1 = 0, VAR_2 = "", VAR_3 = "", VAR_4 = 0; VAR_1 < 10000; VAR_1++) {
          VAR_2 = ("0" + VAR_1).substr(-2);
        }
    }
};