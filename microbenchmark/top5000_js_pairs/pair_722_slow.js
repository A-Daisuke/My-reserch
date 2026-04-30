const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3];
        var VAR_2,
          VAR_3 = [];
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_3 = VAR_3.concat(VAR_1);
        }
    }
};