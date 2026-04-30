const Benchmark = {
    run: function() {
        const VAR_1 = {
          KEY_1: 1,
          KEY_2: 2,
        };
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1[Object.keys(VAR_1)[0]];
        }
    }
};