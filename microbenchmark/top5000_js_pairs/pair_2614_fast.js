const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2,
          VAR_3 = 1000;
        var VAR_5 = 0;
        for (VAR_2 = 0; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1[VAR_5++] = 0;
          VAR_1[VAR_5++] = 1;
          VAR_1[VAR_5++] = 2;
          VAR_1[VAR_5++] = 3;
          VAR_1[VAR_5++] = 4;
          VAR_1[VAR_5++] = 5;
          VAR_1[VAR_5++] = 6;
          VAR_1[VAR_5++] = 7;
          VAR_1[VAR_5++] = 8;
        }
    }
};