const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5];
        for (var VAR_2 = 0; VAR_2 < 999999; VAR_2++) VAR_1 = [1, 2, 3, 4, 5];
    }
};