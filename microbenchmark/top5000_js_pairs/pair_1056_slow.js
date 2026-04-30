const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 10000; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1.push(VAR_2, VAR_2 + 1, VAR_2 + 2, VAR_2 + 3, VAR_2 + 4, VAR_2 + 5, VAR_2 + 6, VAR_2 + 7, VAR_2 + 8);
        }
    }
};