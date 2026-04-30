const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = 20;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          ];
          VAR_1 = VAR_1.slice(0, VAR_3).concat([3], VAR_1.slice(VAR_3, VAR_1.length));
        }
    }
};