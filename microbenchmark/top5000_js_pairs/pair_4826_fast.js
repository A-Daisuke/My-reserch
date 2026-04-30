const Benchmark = {
    run: function() {
        var VAR_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var VAR_2 = [0, null, undefined, "3", 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var VAR_3 = 0;
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          VAR_3 = VAR_3 * 124141 + 5351;
          var VAR_6 = VAR_3 & 15;
          var VAR_7 = VAR_6 < VAR_1.length ? VAR_1[VAR_6] : undefined;
          VAR_4 += VAR_7 | 0;
        }
    }
};