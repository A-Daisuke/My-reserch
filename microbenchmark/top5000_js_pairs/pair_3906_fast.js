const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          KEY_2: [],
        };
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.KEY_2.push(VAR_2);
        }
    }
};