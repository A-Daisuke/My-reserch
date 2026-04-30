const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(new Date(Date.UTC(2015, 8, 14, 10, 16, 3, 1)));
        }
    }
};