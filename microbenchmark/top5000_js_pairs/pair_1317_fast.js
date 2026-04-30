const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        for (var VAR_3 = 0; VAR_3 < 60000; VAR_3++) {
          VAR_1 = VAR_3;
          VAR_2 = 0;
          VAR_1 = VAR_3;
          VAR_2 = 1;
          VAR_1 = VAR_3;
          VAR_2 = 2;
          VAR_1 = VAR_3;
          VAR_2 = 3;
        }
    }
};