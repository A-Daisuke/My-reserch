const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 3, 3, 2, 22];
        var VAR_2 = [7, 8, 9, 0, 1, 2, 3, 4, 5, 56, 3, 6, 7, 7, 8, 8];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_1.push.apply(VAR_1, VAR_2);
        VAR_1.length;
    }
};