const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push([VAR_2, VAR_2 + 1, VAR_2 + 2, VAR_2 + 3, VAR_2 + 4]);
        }
        VAR_3 = VAR_1.flat(1);
    }
};