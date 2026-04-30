const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (var VAR_3 = 0, VAR_4 = 10000; VAR_3 < VAR_4; ++VAR_3) {
          VAR_1[VAR_2++] = VAR_3;
          VAR_1[VAR_2++] = VAR_3 + 1;
          VAR_1[VAR_2++] = VAR_3 + 2;
          VAR_1[VAR_2++] = VAR_3 + 3;
          VAR_1[VAR_2++] = VAR_3 + 4;
          VAR_1[VAR_2++] = VAR_3 + 5;
          VAR_1[VAR_2++] = VAR_3 + 6;
          VAR_1[VAR_2++] = VAR_3 + 7;
          VAR_1[VAR_2++] = VAR_3 + 8;
        }
    }
};