const Benchmark = {
    run: function() {
        var VAR_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var VAR_2 = [0, null, undefined, "3", 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var VAR_3 = 0;
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          VAR_3 = VAR_3 * 124141 + 5351;
          VAR_4 += VAR_2[VAR_3 & 15] | 0;
        }
    }
};