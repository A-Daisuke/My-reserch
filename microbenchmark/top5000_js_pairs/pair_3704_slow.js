const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2,
          VAR_3 = 1000;
        var VAR_4 = 0;
        for (VAR_2 = 0; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1[VAR_4++] = 0;
          VAR_1[VAR_4++] = 1;
          VAR_1[VAR_4++] = 2;
          VAR_1[VAR_4++] = 3;
          VAR_1[VAR_4++] = 4;
          VAR_1[VAR_4++] = 5;
          VAR_1[VAR_4++] = 6;
          VAR_1[VAR_4++] = 7;
          VAR_1[VAR_4++] = 8;
        }
    }
};