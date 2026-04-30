const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = 20;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          ];
          VAR_2 = VAR_1.splice(VAR_3, VAR_1.length - VAR_3);
          VAR_1 = VAR_1.concat([3, 5, 6, 7, 8, 9, 10], VAR_2);
        }
    }
};