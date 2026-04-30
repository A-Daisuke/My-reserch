const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5];
        var VAR_2 = [1, 2, 3, 4, 5];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 = VAR_1.concat(VAR_2);
        }
    }
};