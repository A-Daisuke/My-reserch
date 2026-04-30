const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 0,
          VAR_3 = 100000;
        for (VAR_1 = VAR_3; VAR_1 != 0; VAR_1--) {
          VAR_2 += 1;
        }
    }
};