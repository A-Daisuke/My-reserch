const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1[0];
        }
    }
};