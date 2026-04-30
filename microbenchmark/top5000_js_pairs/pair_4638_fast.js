const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2 = new Array(VAR_1 * 4);
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2[VAR_3 * 4] = 10;
          VAR_2[VAR_3 * 4 + 1] = 20;
          VAR_2[VAR_3 * 4 + 2] = 424;
          VAR_2[VAR_3 * 4 + 3] = 1;
        }
    }
};