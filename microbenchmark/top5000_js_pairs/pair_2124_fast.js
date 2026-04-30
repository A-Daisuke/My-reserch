const Benchmark = {
    run: function() {
        var VAR_1 = false;
        for (let VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          [1, 2, ...(VAR_1 ? [3, 4] : []), 5, 6];
          VAR_1 = !VAR_1;
        }
    }
};