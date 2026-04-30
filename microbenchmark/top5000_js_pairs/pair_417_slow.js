const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 = VAR_1.concat([0, 1, 2, 3, 4, 5, 6]);
        }
    }
};